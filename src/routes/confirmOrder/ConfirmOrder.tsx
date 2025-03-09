import useBasket from '../../helpers/useBasket';
import Page from '../../components/page/Page';
import FancySection from '../../components/generalUI/fancySection/FancySection';
import useTranslations from '../../translations/useTranslations';
import ConfirmOrderStickyFooter from './components/confirmOrderStickyFooter/ConfirmOrderStickyFooter';
import s from './ConfirmOrder.module.css';
import useUser from '../../helpers/useUser/useUser';

export const ConfirmOrder = () => {
    const { user } = useUser()
    const T = useTranslations()

    const isAnonymous = user?.model?.anonymous
    const userSpecificText = isAnonymous ? T('confirmOrder_section1anonymous_text') : T('confirmOrder_section1base_text')

    return (
        <Page
            outsideChilds={<ConfirmOrderStickyFooter/>}
        >
            <FancySection 
                header={T('confirmOrder_section1_title')} 
                content={[userSpecificText, T('confirmOrder_section1a_text')]}
                keyWords={['info@gingergio.it']}
            />
        </Page>
    );
}
