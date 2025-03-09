import { useState } from "react";
import useTranslations from "../../../../translations/useTranslations";
import LoadingSection from "../../../../components/generalUI/loadingSection/LoadingSection";
import { UseUser } from "../../../../helpers/useUser/useUser";
import { FormComponent } from "../../../../components/generalUI/form/FormComponent";
import s from './UserProfile.module.css';
import ActionButton from "../../../../components/generalUI/actionButton/ActionButton";

interface Props {
    useUser: UseUser
}

const UserProfile = ({ useUser }: Props) => {
    const { isLoading, user, updateInfo } = useUser
    const [name, setName] = useState(user?.model?.name || '')
    const [surname, setSurname] = useState(user?.model?.surname || '')
    const [address, setAddress] = useState(user?.model?.address || '')
    const T = useTranslations()

    return (
        <> 
            <LoadingSection isLoading={isLoading} isError={!Boolean(user?.model?.id)}>
                {user?.model.anonymous ? (
                    T('anonymousUserProfileDisclaimer')
                ) : (
                    <>
                        <div className={s.formContainer}>
                            <FormComponent className={s.form} text={name} setText={setName} label={T('name')}/>
                            <FormComponent className={s.form} text={surname} setText={setSurname} label={T('surname')}/>
                            <FormComponent className={s.form} text={address} setText={setAddress} label={T('address')}/>
                        </div>
                        <ActionButton 
                            label={T('updateUserInfo')} 
                            onClick={() => updateInfo({ name, surname, address })} 
                        />
                    </>
                )}
            </LoadingSection>
        </>
    );
}

export default UserProfile;