import { useWarehouse } from "../../../queries/warehouse";
import ActionButton from "../../../components/generalUI/actionButton/ActionButton";
import useBasket from "../../../helpers/useBasket";
import s from './BuyBox.module.css';

interface Props {
    closeBox: () => void;
}

const BuyBox = ({ closeBox }: Props) => {
    const { add } = useBasket();

    const warehouse = useWarehouse();
    console.log(warehouse.data);

    const addToBasket = () => {
        const item = {
            name: 'House Pride',
            variant: 'base',
            format: '250ml Tappo meccanico'
        }
        add(item);
    }
    return (
        <div className={s.container}>
            <div className={s.optionRow}>
                <div>quantita</div>
                <div>disponibilita immediata</div>
                <div>formato</div>
                <div>costo formato</div>
                <div>cashback</div>
                <div>prezzo per unita</div>
            </div>
            <div className={s.optionRow}>
                <input></input>
                <div>6</div>
                <div>250ml Tappo meccanico</div>
                <div>€ 2</div>
                <div>€ 1,50</div>
                <div>€ 3.25</div>
            </div>
            <div className={s.optionRow}>
                <input></input>
                <div>6</div>
                <div>220ml Tappo meccanico</div>
                <div>€ 1,5</div>
                <div>€ 1,25</div>
                <div>€ 3.00</div>
            </div>
            <div className={s.litrepriceBox}>
                <div className={s.litrepriceLabel}>Prezzo per litro</div>
                <div className={s.litreprice}>€ 6</div>
                <div className={s.litreprice}>2€ costo di produzione, 4€ margine lordo Ginger Gio</div>
            </div>
            <div className={s.priceBox}>
                <div className={s.priceLabel}>Totale</div>
                <div className={s.price}>€ 2,50 (€ 1,5 cashback)</div>
            </div>
            <div className={s.actions}>
                <ActionButton onClick={closeBox} label="nascondi" contrast={true}/>
                <ActionButton onClick={addToBasket} label="aggiungi al carrello"/>
            </div>
        </div>
    );
}

export default BuyBox;
