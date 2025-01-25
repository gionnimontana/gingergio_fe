import useBasket from '../../helpers/useBasket';
import ActionButton from '../../components/generalUI/actionButton/ActionButton';
import FancyHeader from '../generalUI/fancyHeader/FancyHeader';
import s from './ProductBox.module.css';
import FancySection from '../../components/generalUI/fancySection/FancySection';

interface Props {
    name: string;
    description: string[];
    imageId: string;
    imageRight?: boolean;
    className?: string;
}

const ProductBox = ({ name, description, imageId, imageRight, className }: Props) => {

    const { add } = useBasket();
    const containerClass = s.container + (className ? ' ' + className : '');

    const addToBasket = () => {
        const item = {
            name,
            variant: 'base',
            format: '250ml Tappo meccanico'
        }
        add(item);
    }

    return (
        <FancySection
            img={{src: `/${imageId}.jpg`, alt: name, right: imageRight}}
            header={name}
            content={
                <div className={s.description}>
                    {description.map((item, index) => <div className={s.descriptionText} key={index}>{item}</div>)}
                    <div className={s.descriptionActions}>
                        <ActionButton label='Aggiungi al carrello' onClick={addToBasket}/>
                    </div>
                </div>
            }
        />
    );
}

export default ProductBox;