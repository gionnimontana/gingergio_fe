import useBasket from '../../helpers/useBasket';
import Page from '../../components/page/Page';
import FancySection from '../../components/generalUI/fancySection/FancySection';
import useTranslations from '../../translations/useTranslations';
import ConfirmOrderStickyFooter from './components/confirmOrderStickyFooter/ConfirmOrderStickyFooter';
import s from './ConfirmOrder.module.css';

export const ConfirmOrder = () => {
    const T = useTranslations()

    return (
        <Page
            outsideChilds={<ConfirmOrderStickyFooter/>}
        >
            <FancySection header={T('basket_section1_title')} content={T('basket_section1_text')}/>
        </Page>
    );
}
