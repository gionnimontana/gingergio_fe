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
import { DatePicker } from '../../components/generalUI/form/DatePicker';
import { confirmOrder } from '../../api/orders/apiOrders';
import s from './PaymentAndDelivery.module.css';
import useUser from '../../helpers/useUser/useUser';

export const PaymentAndDelivery = () => {
    const { data } = useWarehouse()
    const { noEmptyList, basket, deleteBasket } = useBasket()
    const { user, isAnonymous } = useUser()
    const T = useTranslations()

    const [warning, setWarning] = useState<string>('')
    const [isLoading, setLoading] = useState<boolean>(false)
    const [delivery, setDelivery] = useState<'onsite'|'remote'>()
    const [name, setName] = useState<string>('')
    const [surname, setSurname] = useState<string>('')
    const [address, setAddress] = useState<string>('')
    const [note, setNote] = useState<string>('')
    const [deliveryDate, setDeliveryDate] = useState<Date>()
    const [pickupDate, setPickupDate] = useState<Date>()

    const areNonWarehouseProducts = checkIfNonWarehouseProducts(data, noEmptyList)
    const wareHouseWarning = areNonWarehouseProducts ? T('non_warehouse_products_warning') : ''

    const onTabChange = (tab: 'onsite' | 'remote') => () => {
        setWarning('')
        setDelivery(tab)
    }

    const onConfirm = async (): Promise<boolean> => {
        setWarning('')
        setLoading(true)
        let success = false
        try {
            const payload = { delivery, name, surname, address, note, deliveryDate, pickupDate }
            const confirmed = await confirmOrder(payload, user, basket)
            if (confirmed) {
                deleteBasket()
                success = true
            }
            else setWarning(T('genericError'))
        } catch (e: any) {
            setWarning(T(e))
        } finally {
            setLoading(false)
            return success
        }
    }

    return (
        <Page
            outsideChilds={<PaymentAndDeliveryFooter canConfirm={Boolean(delivery)} onConfirm={onConfirm} isLoading={isLoading}/>}
        >
            <FancySection header={T('paymentAndDelivery_section1_title')} content={T('paymentAndDelivery_section1_text')}/>
            {wareHouseWarning ? 
                <div className={s.wareHouseWarning}>⚠️ {T('non_warehouse_disclaimer')}</div>
            : null}
            <RadioContainer>
                <RadioGroup 
                    expanded={delivery === 'onsite'} 
                    label={T('onsite')} 
                    onChange={onTabChange('onsite')}
                    message={warning}
                >
                    <div className={s.onSiteDisclaimer}>{T('on_site_disclaimer')}</div>
                    <FormComponent className={s.form} text={name} setText={setName} label={T('name')}/>
                    <FormComponent className={s.form} text={surname} setText={setSurname} label={T('surname')}/>
                    <DatePicker className={s.form} onChange={setPickupDate} label={T('pickupDate')} delayed={areNonWarehouseProducts}/>
                    <FormComponent className={s.form} text={note} setText={setNote} label={T('note')} textarea={true}/>
                    {isAnonymous() ? <div>{T('anonymous_user_delivery_note_disclaimer')}</div> : null}
                </RadioGroup>
                <RadioGroup 
                    expanded={delivery === 'remote'} 
                    label={T('remote')} 
                    onChange={onTabChange('remote')}
                    message={warning}
                >
                    <FormComponent className={s.form} text={name} setText={setName} label={T('name')}/>
                    <FormComponent className={s.form} text={surname} setText={setSurname} label={T('surname')}/>
                    <FormComponent className={s.form} text={address} setText={setAddress} label={T('address')}/>
                    <DatePicker className={s.form} onChange={setDeliveryDate} label={T('deliveryDate')} delayed={areNonWarehouseProducts}/>
                    <FormComponent className={s.form} text={note} setText={setNote} label={T('note')} textarea={true}/>
                    {isAnonymous() ? <div>{T('anonymous_user_delivery_note_disclaimer')}</div> : null}
                </RadioGroup>
            </RadioContainer>
        </Page>
    );
}