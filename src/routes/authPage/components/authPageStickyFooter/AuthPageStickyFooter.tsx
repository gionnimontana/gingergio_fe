import { useNavigate } from "react-router-dom";
import { routes } from "../../../../constants/routes";
import useTranslations from "../../../../translations/useTranslations";
import StickyFooter from "../../../../components/generalUI/stickyFooter/StickyFooter";
import ActionButton from "../../../../components/generalUI/actionButton/ActionButton";
import { AuthAction } from "../../AuthPage";

interface Props {
    disableRight: boolean;
    action: AuthAction;
    onRightClick: () => void;
    isLoading: boolean;
}

const AuthPageStickyFooter = ({ disableRight, action, onRightClick, isLoading }: Props) => {
    const T = useTranslations();
    const navigate = useNavigate()
    const goToBasket = () => {
        navigate(routes.Basket)
    }
    
    return (
        <StickyFooter>
            <ActionButton label={T('goToBasket')} onClick={goToBasket} contrast={true}/>
            <ActionButton 
                label={T('confirm')}
                onClick={onRightClick}
                disabled={disableRight}
                isLoading={isLoading}
            />
        </StickyFooter>
    );
};

export default AuthPageStickyFooter;