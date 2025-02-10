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
import { routes } from '../../constants/routes';
import { pb } from '../../helpers/pb';
import s from './AuthPage.module.css';

export type AuthAction = 'login'|'subscribe'|'goNoAuth' | undefined

export const AuthPage = () => {
    const { login, message, isLoading, user, subscribe } = useUser()
    const [authAction, setAuthAction] = useState<AuthAction>()
    const [email, setEmail] = useState<string>(user?.model.email || '')
    const [password, setPassword] = useState<string>('')
    const [subscribeStep, setSubscribeStep] = useState<'request'|'confirm'>('request')
    
    const T = useTranslations()
    const navigate = useNavigate()
    const goToPaymentAndDelivery = () => navigate(routes.PaymentAndDelivery)

    useEffect(() => {
        if (!user || !user.model.id) return;
        if (user.model.verified) goToPaymentAndDelivery();
    }, [user]);

    const onRightClick = async () => {
        if (authAction === 'login') {
            const success = await login(email, password);
            if (success) goToPaymentAndDelivery();
        }
        if (authAction === 'subscribe') {
            const success = await subscribe(email, password);
            if (success) setSubscribeStep('confirm')
        }
    }

    return (
        <Page
            outsideChilds={
                <PaymentAndDeliveryFooter 
                    disableRight={isLoading || subscribeStep === 'confirm'} 
                    action={authAction} 
                    onRightClick={onRightClick}
                    isLoading={isLoading || subscribeStep === 'confirm'}
                />
            }
        >
            <FancySection header={T('authPage_section1_title')} content={T('authPage_section1_text')}/>
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
                />
            </RadioContainer>
        </Page>
    );
}
