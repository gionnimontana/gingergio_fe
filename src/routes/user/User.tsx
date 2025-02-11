import useTranslations from '../../translations/useTranslations';
import ActionButton from '../../components/generalUI/actionButton/ActionButton';
import Page from '../../components/page/Page';
import useUser from '../../helpers/useUser/useUser';
import { AuthPage } from '../../routes/authPage/AuthPage';
import FancySection from '../../components/generalUI/fancySection/FancySection';

export const User = () => {
    const { user, logout } = useUser()
    const T = useTranslations()

    const showProfile = user?.model

    if (!showProfile) return <AuthPage/>

    return (
        <Page>
            <FancySection 
                header={T('userPage_header')} 
                content={T('userPage_content')}
            />
            <ActionButton label={T('logout')} onClick={logout}/>
        </Page>
    );
}
