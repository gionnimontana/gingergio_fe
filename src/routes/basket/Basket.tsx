import useBasket from '../../helpers/useBasket';
import Page from '../../components/page/Page';
import FancySection from '../../components/generalUI/FancySection/FancySection';
import useTranslations from '../../translations/useTranslations';
import s from './Basket.module.css';
import BasketStickyFooter from './components/basketStickyFooter/BasketStickyFooter';
import ActionButton from '../../components/generalUI/actionButton/ActionButton';

export const Basket = () => {

    const { basket, remove } = useBasket()
    const T = useTranslations()

    return (
        <Page
            outsideChilds={<BasketStickyFooter/>}
        >
            <FancySection header={T('basket_section1_title')} content={T('basket_section1_text')}/>
            <div className={s.basket}>
                {basket.map((item, index) => (
                    <div key={index} className={s.basketItem}>
                        <div>{item.name}</div>
                        <div>{item.format}</div>
                        <div>{item.variant}</div>
                        <div onClick={() => remove(index)} className={s.trashIcon}>🗑️</div>
                    </div>
                ))}
            </div>
        </Page>
    );
}

export default Basket