import { useState } from 'react';
import Page from '../../components/page/Page';
import FancySection from '../../components/generalUI/fancySection/FancySection';
import useTranslations from '../../translations/useTranslations';
import PaymentAndDeliveryFooter from './components/paymentAndDeliveryStickyFooter/PaymentAndDeliveryStickyFooter';
import useBasket from '../../helpers/useBasket';
import { checkIfNonWarehouseProducts, useWarehouse } from '../../queries/warehouse';
import { FormComponent } from '../../components/generalUI/form/FormComponent';
import { RadioContainer } from '../../components/generalUI/radioGroup/RadioContainer';
import { RadioGroup } from '../../components/generalUI/radioGroup/RadioGroup';
import s from './PaymentAndDelivery.module.css';

export const PaymentAndDelivery = () => {
    const [delivery, setDelivery] = useState<'onsite'|'remote'>()
    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [note, setNote] = useState<string>('')

    const { data } = useWarehouse()
    const { noEmptyList } = useBasket()
    const T = useTranslations()

    const areNonWarehouseProducts = checkIfNonWarehouseProducts(data, noEmptyList)

    return (
        <Page
            outsideChilds={<PaymentAndDeliveryFooter canConfirm={true}/>}
        >
            <FancySection header={T('paymentAndDelivery_section1_title')} content={T('paymentAndDelivery_section1_text')}/>
            <RadioContainer>
                <RadioGroup expanded={delivery === 'onsite'} label={T('paymentAndDelivery_radio1')} onChange={() => setDelivery('onsite')}>
                    <FormComponent className={s.form} text={name} setText={setName} label={T('name')}/>
                    <FormComponent className={s.form} text={surname} setText={setSurname} label={T('surname')}/>
                    <FormComponent className={s.form} text={email} setText={setEmail} label={T('email')}/>
                    <FormComponent className={s.form} text={note} setText={setNote} label={T('note')} textarea={true}/>
                    <div className={s.inputLabel}>{'fascio di ritiro'}</div>
                </RadioGroup>
                <RadioGroup expanded={delivery === 'remote'} label={T('paymentAndDelivery_radio2')} onChange={() => setDelivery('remote')}>
                    <FormComponent className={s.form} text={name} setText={setName} label={T('name')}/>
                    <FormComponent className={s.form} text={surname} setText={setSurname} label={T('surname')}/>
                    <FormComponent className={s.form} text={email} setText={setEmail} label={T('email')}/>
                    <FormComponent className={s.form} text={address} setText={setAddress} label={T('address')}/>
                    <FormComponent className={s.form} text={note} setText={setNote} label={T('note')}/>
                    <div className={s.inputLabel}>{'data di consegna'}</div>
                </RadioGroup>
            </RadioContainer>
        </Page>
    );
}
