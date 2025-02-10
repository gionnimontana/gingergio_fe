import { useEffect, useState } from "react";
import { makeObservable } from "../makeObservable";
import { User } from "../../types/user";
import { pb } from "../../helpers/pb";
import useTranslations from "../../translations/useTranslations";

const userStorageKey = 'pocketbase_auth';

const initialUserStore = localStorage.getItem(userStorageKey) 
    ? JSON.parse(localStorage.getItem(userStorageKey)!) 
    : undefined
const userStore = makeObservable(initialUserStore);

export interface UserStore {
    model: User;
    token: string | undefined; 
}

const useUser = () => {
    const [user, setUser] = useState<UserStore | undefined>(userStore.get());
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [message, setmessage] = useState<string | undefined>();

    const T = useTranslations();

    useEffect(() => {
        const storedUserRaw = localStorage.getItem(userStorageKey);
        const storedUser = storedUserRaw ? JSON.parse(storedUserRaw) : [];
        if (storedUser) {
            userStore.set(storedUser);
        }
        return userStore.subscribe(setUser)
    }, []);

    useEffect(() => {
        if (!user || !user.model?.id) return;
        pb.collection('users').subscribe(user?.model?.id, (e: any) => {
            userStore.set({ ...user, model: e.record });
        });
        return () => {
            pb.collection('users').unsubscribe();
        }
    }, [user]);

    return {
        user,
        login: async (email: string, password: string): Promise<boolean> => {
            setmessage(undefined);
            setIsLoading(true);
            let success = false;
            try {
                const res: any = await pb.collection('users').authWithPassword(email, password);
                if (res.record.id) {
                    userStore.set({ ...user, model: res.record });
                    if (!res.record.verified) {
                        await pb.collection('users').requestVerification(email);
                        setmessage(T('emailVerifyRequest'));
                    } else {
                        success = true;
                        setIsLoading(false);
                    }
                } else {
                    setIsLoading(false);
                    throw new Error('No user found');
                }
            } catch (e) {
                setmessage(T('loginErrorMsg'));
                setIsLoading(false);
            } finally {
                return success;
            }
        },
        subscribe: async (email: string, password: string): Promise<boolean> => {
            setmessage(undefined);
            setIsLoading(true);
            let success = false;
            const data = {
                "password": password,
                "passwordConfirm": password,
                "email": email,
                "emailVisibility": true,
                "name": email
            };
            
            try {
                const res: any = await pb.collection('users').create(data);
                const requestVerification = await pb.collection('users').requestVerification(email);
                const login = await pb.collection('users').authWithPassword(email, password);
                if (res.id && requestVerification && login.record.id) {
                    userStore.set({ ...user, model: res });
                    setmessage(T('emailVerifyRequest'));
                    success = true;
                }
            } catch (e: any) {
                const pwdMsgRaw = e?.response?.data?.password?.message
                if (pwdMsgRaw) {
                    const pwdMsg = `⚠️ Password ${pwdMsgRaw} ⚠️`;
                    setmessage(pwdMsg);
                }
                const emailMsgRaw = e?.response?.data?.email?.message
                if (emailMsgRaw) {
                    const emailMsg = `⚠️ Email ${emailMsgRaw} ⚠️`;
                    setmessage(emailMsg);
                }
            } finally {
                setIsLoading(false);
                return success;
            }
        },
        noAuthLogin: async () => {
            setmessage(undefined);
            setIsLoading(true);
            let success = false;
            const randomPwd = `${Math.random().toString(36).slice(2)}`;
            const randomEmail = `${Math.random().toString(36).substring(7)}@gingergio.it`;
            const data = {
                "password": randomPwd,
                "passwordConfirm": randomPwd,
                "email": randomEmail,
                "emailVisibility": false,
                "anonymous": true
            };
            try {
                const res: any = await pb.collection('users').create(data);
                const login = await pb.collection('users').authWithPassword(randomEmail, randomPwd);
                if (res.id && login.record.id) {
                    userStore.set({ model: res, token: undefined });
                    success = true;
                }
            } catch (e: any) {
                setmessage(T('genericError'));
            } finally {
                setIsLoading(false);
                return success;
            }
        },
        logout: () => {
            userStore.set(undefined);
            localStorage.removeItem(userStorageKey);
        },
        message,
        isLoading,
    };
}

export default useUser;