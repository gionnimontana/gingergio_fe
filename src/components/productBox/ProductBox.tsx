import useBasket from '../../helpers/useBasket';
import ActionButton from '../../components/generalUI/actionButton/ActionButton';
import FancyHeader from '../generalUI/fancyHeader/FancyHeader';
import s from './ProductBox.module.css';

interface Props {
    name: string;
    description: string;
    imageId: string;
    className?: string;
}

const ProductBox = ({ name, description, imageId, className }: Props) => {

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
        <div className={containerClass}>
            <FancyHeader content={name} />
            <div className={s.imageAndDesc}>
                <img className={s.image} src={`/${imageId}.jpg`} alt={name}/>
                <div className={s.description}>
                    <div className={s.descriptionText}>{description}</div>
                    <div className={s.descriptionActions}>
                        <ActionButton label='Aggiungi al carrello' onClick={addToBasket}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductBox;