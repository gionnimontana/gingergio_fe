import { useNavigate } from "react-router-dom";
import { routes } from "../../../../constants/routes";
import useTranslations from "../../../../translations/useTranslations";
import StickyFooter from "../../../../components/generalUI/stickyFooter/StickyFooter";
import ActionButton from "../../../../components/generalUI/actionButton/ActionButton";

const ConfirmOrderStickyFooter = () => {
    const T = useTranslations();
    const navigate = useNavigate()
    const goToMarket = () => {
        navigate(routes.Market)
    }

    return (
        <StickyFooter>
            <ActionButton label={T('goToShop')} onClick={goToMarket}/>
        </StickyFooter>
    );
};

export default ConfirmOrderStickyFooter;