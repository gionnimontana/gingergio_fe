import { useNavigate } from "react-router-dom";
import { routes } from "../../../../constants/routes";
import useTranslations from "../../../../translations/useTranslations";
import StickyFooter from "../../../../components/generalUI/stickyFooter/StickyFooter";
import ActionButton from "../../../../components/generalUI/actionButton/ActionButton";
import s from "./BasketStickyFooter.module.css";

const ConfirmOrderStickyFooter = () => {
    const T = useTranslations();
    const navigate = useNavigate()
    const goToMarket = () => {
        navigate(routes.Market)
    }

    return (
        <StickyFooter>
            <ActionButton label={T('basketStickyFooter_button1')} onClick={goToMarket}/>
        </StickyFooter>
    );
};

export default ConfirmOrderStickyFooter;