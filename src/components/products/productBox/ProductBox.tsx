import useTranslations from 'translations/useTranslations';
import ActionButton from 'components/generalUI/actionButton/ActionButton';
import FancySection from 'components/generalUI/fancySection/FancySection';
import BuyBox from './BuyBox/BuyBox';
import s from './ProductBox.module.css';
import { useState } from 'react';
import HighlightKeyword from 'components/generalUI/highlightKeyword/HighlightKeyword';

interface Props {
    name: string;
    description: string[];
    productId: string;
    imageRight?: boolean;
    keyWords?: string[];
}

const ProductBox = ({ name, description, productId, imageRight, keyWords }: Props) => {
    const [open, setOpen] = useState<boolean>(false);

    const T = useTranslations()

    const defaultKeywords = ['Ingredienti', 'Valori nutrizionali', 'Modalità di conservazione:', 'Ingredients', 'Nutritional values', 'Conservation mode:'];
    const k = keyWords ? [...keyWords, ...defaultKeywords] : defaultKeywords;

    return (
        <FancySection
            img={{src: `/${productId}.jpg`, alt: name, right: imageRight}}
            header={name}
            content={
                <div className={s.description}>
                    {description.map((item, index) => (
                        <HighlightKeyword 
                            className={s.descriptionText} 
                            key={index}
                            text={item}
                            keywords={k}
                        />
                    ))}
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