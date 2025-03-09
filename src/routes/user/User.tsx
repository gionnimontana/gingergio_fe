import useTranslations from '../../translations/useTranslations';
import Page from '../../components/page/Page';
import useUser from '../../helpers/useUser/useUser';
import { AuthPage } from '../../routes/authPage/AuthPage';
import FancySection from '../../components/generalUI/fancySection/FancySection';
import UserPageStickyFooter from './components/userPageStickyFooter/UserPageStickyFooter';
import ActionButton from '../../components/generalUI/actionButton/ActionButton';
import UserOrders from './components/userOrders/UserOrders';
import UserProfile from './components/userProfile/UserProfile';

export const User = () => {
    const userData = useUser()
    const { user, logout } = userData
    const T = useTranslations()

    const isAnonymous = user?.model?.anonymous
    const showProfile = user?.model?.verified || isAnonymous

    if (!showProfile) return <AuthPage/>

    const userName = isAnonymous ? T('anonymous_user') : user?.model?.email.split('@')[0]
    const header = T('userPage_header') + ' ' + userName   

    return (
        <Page outsideChilds={<UserPageStickyFooter/>}>
            <FancySection 
                header={header} 
                content={[T('userPage_content1'), T('userPage_content2')]}
                keyWords={['info@gingergio.it']}
            />
            <FancySection
                header={T('userPage_orders')}
                content={<UserOrders/>}
            />
            <FancySection
                header={T('userPage_profile')}
                content={<UserProfile useUser={userData}/>}
            />
            <ActionButton label={T('logout')} onClick={logout} contrast={true}/>
        </Page>
    );
}
