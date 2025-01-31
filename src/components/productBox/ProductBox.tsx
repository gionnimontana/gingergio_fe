import useTranslations from '../../translations/useTranslations';
import ActionButton from '../../components/generalUI/actionButton/ActionButton';
import FancySection from '../../components/generalUI/fancySection/FancySection';
import BuyBox from './BuyBox/BuyBox';
import s from './ProductBox.module.css';
import { useState } from 'react';

interface Props {
    name: string;
    description: string[];
    productId: string;
    imageRight?: boolean;
}

const ProductBox = ({ name, description, productId, imageRight }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    const T = useTranslations()

    return (
        <FancySection
            img={{src: `/${productId}.jpg`, alt: name, right: imageRight}}
            header={name}
            content={
                <div className={s.description}>
                    {description.map((item, index) => <div className={s.descriptionText} key={index}>{item}</div>)}
                    <div className={s.descriptionActions}>
                        <ActionButton label={open ? T('hide') : T('productbox_mainbutton')} onClick={()=>setOpen((v)=>!v)} contrast={open}/>
                        {open ? <BuyBox productId={name}/> : null}
                    </div>
                </div>
            }
        />
    );
}

export default ProductBox;