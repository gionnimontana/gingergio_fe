import { useState } from 'react';
import Page from '../../components/page/Page';
import FancySection from '../../components/generalUI/fancySection/FancySection';
import useTranslations from '../../translations/useTranslations';
import PaymentAndDeliveryFooter from './components/authPageStickyFooter/AuthPageStickyFooter';
import { RadioContainer } from '../../components/generalUI/radioGroup/RadioContainer';
import { RadioGroup } from '../../components/generalUI/radioGroup/RadioGroup';
import { FormComponent } from '../../components/generalUI/form/FormComponent';
import s from './AuthPage.module.css';
import { pb } from '../../helpers/pb';

export type AuthAction = 'login'|'subscribe'|'goNoAuth' | undefined

export const AuthPage = () => {
    const [authAction, setAuthAction] = useState<AuthAction>()
    const [user, setUser] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    
    const T = useTranslations()

    const onRightClick = async () => {
        const res = await pb.collection('users').authWithPassword(user, password);
        console.log(res);
    }

    return (
        <Page
            outsideChilds={
                <PaymentAndDeliveryFooter 
                    disableRight={authAction !== 'login'} 
                    action={authAction} 
                    onRightClick={onRightClick}
                />
            }
        >
            <FancySection header={T('authPage_section1_title')} content={T('authPage_section1_text')}/>
            <RadioContainer>
                <RadioGroup expanded={authAction === 'login'} label={T('login')} onChange={() => setAuthAction('login')}>
                    <FormComponent className={s.form} text={user} setText={setUser} label={T('user')}/>
                    <FormComponent className={s.form} text={password} setText={setPassword} label={T('password')} isPassword={true}/>
                </RadioGroup>
                <RadioGroup expanded={authAction === 'subscribe'} label={T('subscribe')} onChange={() => setAuthAction('subscribe')}>
                    register
                </RadioGroup>
                <RadioGroup expanded={authAction === 'goNoAuth'} label={T('goNoAuth')} onChange={() => setAuthAction('goNoAuth')}>
                    noauth
                </RadioGroup>
            </RadioContainer>
        </Page>
    );
}
