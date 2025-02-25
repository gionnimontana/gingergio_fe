import Page from "../../components/page/Page";
import FancySection from "../../components/generalUI/fancySection/FancySection";
import useTranslations from "../../translations/useTranslations";
import NotForSaleStickyFooter from "./components/NotForSaleStickyFooter";

const NotForSale = () => {
    const T = useTranslations()

    return (
        <Page
            outsideChilds={<NotForSaleStickyFooter/>}
        >
            <FancySection
                header={T('not_for_sale_title')}
                content={[T('not_for_sale_text1'), T('not_for_sale_text2'), T('not_for_sale_text3')]}
                img={{src: '/bottle_home.jpg', alt: 'bottles'}}
                keyWords={['Haccp', 'igiene', 'hygiene', 'sicurezza alimentare', 'safety procedures']}
            />
            <FancySection
                header={T('not_for_sale_title2')}
                content={[T('not_for_sale_text4'), T('not_for_sale_text5')]}
                img={{src: '/gingergio_face.webp', alt: 'Ginger Gio', right: true}}
                keyWords={['Revolut', 'Satispay', 'Sepa']}
            />
        </Page>
    );
 };

 export default NotForSale;