import useTranslations from "../../../../translations/useTranslations";
import StickyFooter from "../../../../components/generalUI/stickyFooter/StickyFooter";
import ActionButton from "../../../../components/generalUI/actionButton/ActionButton";
import useUser from "../../../../helpers/useUser/useUser";
import { routes } from "../../../../constants/routes";
import { useNavigate } from "react-router-dom";

interface Props {}

const UserPageStickyFooter = ({}: Props) => {
    const { logout } = useUser()
    const navigate = useNavigate()

    const goToBasket = () => {
        navigate(routes.Basket)
    }
    const goToShop = () => {
        navigate(routes.Market)
    }
    
    const T = useTranslations()
    
    return (
        <StickyFooter>
            <ActionButton label={T('goToShop')} onClick={goToShop}/>
            <ActionButton label={T('goToBasket')} onClick={goToBasket}/>
        </StickyFooter>
    );
};

export default UserPageStickyFooter;