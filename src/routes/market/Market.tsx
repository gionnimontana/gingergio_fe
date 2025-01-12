import Page from '../../components/page/Page';
import FancyTextBox from '../../components/generalUI/fancyTextBox/FancyTextBox';
import useTranslations from '../../translations/useTranslations';
import s from './Market.module.css';

export const Market = () => {

    const T = useTranslations()

    return (
        <Page>
            <FancyTextBox header={T('market_section1_title')} content={T('market_section1_text')}/>
        </Page>
    );
}