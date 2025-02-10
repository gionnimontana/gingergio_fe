import { useEffect, useState } from 'react';
import Page from '../../components/page/Page';
import FancySection from '../../components/generalUI/fancySection/FancySection';
import useTranslations from '../../translations/useTranslations';
import PaymentAndDeliveryFooter from './components/authPageStickyFooter/AuthPageStickyFooter';
import { RadioContainer } from '../../components/generalUI/radioGroup/RadioContainer';
import { RadioGroup } from '../../components/generalUI/radioGroup/RadioGroup';
import { FormComponent } from '../../components/generalUI/form/FormComponent';
import useUser from '../../helpers/useUser/useUser';
import { useNavigate } from 'react-router-dom';
import s from './AuthPage.module.css';

export type AuthAction = 'login'|'subscribe'|'goNoAuth' | undefined

interface Props {
    nextRoute?: string
}

export const AuthPage = ({ nextRoute }: Props) => {
    const { login, message, isLoading, user, subscribe, noAuthLogin } = useUser()
    const [authAction, setAuthAction] = useState<AuthAction>()
    const [email, setEmail] = useState<string>(user?.model?.email || '')
    const [password, setPassword] = useState<string>('')
    const [subscribeStep, setSubscribeStep] = useState<'request'|'confirm'>('request')
    
    const T = useTranslations()
    const navigate = useNavigate()
    const goNextRoute = () => nextRoute ? navigate(nextRoute) : null

    useEffect(() => {
        if (!user || !user.model?.id) return;
        if (user.model.verified || user.model.anonymous) goNextRoute();
    }, [user]);

    const onRightClick = async () => {
        if (authAction === 'login') {
            const success = await login(email, password);
            if (success) goNextRoute();
        }
        if (authAction === 'subscribe') {
            const success = await subscribe(email, password);
            if (success) setSubscribeStep('confirm')
        }
        if (authAction === 'goNoAuth') {
            const success = await noAuthLogin();
            if (success) goNextRoute();
        }
    }

    const disableRight = !authAction || isLoading || subscribeStep === 'confirm'

    return (
        <Page
            outsideChilds={
                <PaymentAndDeliveryFooter 
                    disableRight={disableRight} 
                    action={authAction} 
                    onRightClick={onRightClick}
                    isLoading={isLoading || subscribeStep === 'confirm'}
                />
            }
        >
            <FancySection 
                header={T('authPage_section1_title')} 
                content={T('authPage_section1_text')}
                keyWords={['cashback']}
            />
            <RadioContainer>
                <RadioGroup 
                    expanded={authAction === 'login'} 
                    label={T('login')} 
                    onChange={() => setAuthAction('login')} 
                    message={message}
                >
                    <FormComponent className={s.form} text={email} setText={setEmail} label={T('email')}/>
                    <FormComponent className={s.form} text={password} setText={setPassword} label={T('password')} isPassword={true}/>
                </RadioGroup>
                <RadioGroup 
                    expanded={authAction === 'subscribe'} 
                    label={T('subscribe')} 
                    onChange={() => setAuthAction('subscribe')}
                    message={message}
                >
                    {subscribeStep === 'request' ? (
                        <>
                            <FormComponent className={s.form} text={email} setText={setEmail} label={T('email')}/>
                            <FormComponent className={s.form} text={password} setText={setPassword} label={T('password')} isPassword={true}/>
                        </>
                    ) : null}
                </RadioGroup>
                <RadioGroup 
                    expanded={authAction === 'goNoAuth'} 
                    label={T('goNoAuth')} 
                    onChange={() => setAuthAction('goNoAuth')} 
                    message={message}
                />
            </RadioContainer>
        </Page>
    );
}
