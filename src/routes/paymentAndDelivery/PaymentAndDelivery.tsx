import Page from '../../components/page/Page';
import FancySection from '../../components/generalUI/fancySection/FancySection';
import useTranslations from '../../translations/useTranslations';
import PaymentAndDeliveryFooter from './components/paymentAndDeliveryStickyFooter/PaymentAndDeliveryStickyFooter';
import useBasket from '../../helpers/useBasket';
import { checkIfNonWarehouseProducts, useWarehouse } from '../../queries/warehouse';
import s from './PaymentAndDelivery.module.css';
import { useState } from 'react';

export const PaymentAndDelivery = () => {
    const [delivery, setDelivery] = useState<'onsite'|'remote'>()
    const { data } = useWarehouse()
    const { noEmptyList } = useBasket()
    const T = useTranslations()

    const areNonWarehouseProducts = checkIfNonWarehouseProducts(data, noEmptyList)

    return (
        <Page
            outsideChilds={<PaymentAndDeliveryFooter canConfirm={true}/>}
        >
            <FancySection header={T('paymentAndDelivery_section1_title')} content={T('paymentAndDelivery_section1_text')}/>
            <div>
                <div className={s.radioContainer}>
                    <div className={s.shadowBox}>
                        <div className={s.radioGroup}>
                            <input className={s.input} type="radio" id="onsite" name="delivery" value="onsite" onChange={() => setDelivery('onsite')}/>
                            <label className={s.inputLabel} htmlFor="onsite">{T('paymentAndDelivery_radio1')}</label>
                        </div>
                        {delivery === 'onsite' ? <div>
                            <div className={s.inputLabel}>Nome*</div>
                            <div className={s.inputLabel}>Cognome*</div>
                            <div className={s.inputLabel}>Email*</div>
                            <div className={s.inputLabel}>Note:</div>
                            <div className={s.inputLabel}>Fascia di ritiro</div>
                        </div> : null}
                    </div>
                    <div className={s.shadowBox}>
                        <div className={s.radioGroup}>
                            <input className={s.input} type="radio" id="remote" name="delivery" value="remote" onChange={() => setDelivery('remote')}/>
                            <label className={s.inputLabel} htmlFor="remote">{T('paymentAndDelivery_radio2')}</label>
                        </div>
                        {delivery === 'remote' ? <div>
                            <div className={s.inputLabel}>Nome*</div>
                            <div className={s.inputLabel}>Cognome*</div>
                            <div className={s.inputLabel}>Email*</div>
                            <div className={s.inputLabel}>Indirizzo*</div>
                            <div className={s.inputLabel}>Note:</div>
                            <div className={s.inputLabel}>Data di consegna</div>
                        </div> : null}
                    </div>
                </div>

            </div>
        </Page>
    );
}
