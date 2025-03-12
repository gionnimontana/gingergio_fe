import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { ScrollRestoration, useNavigate } from "react-router-dom";
import s from './Page.module.css';
import useUser from "../../helpers/useUser/useUser";
import { useEffect } from "react";
import { routes } from "../../constants/routes";

interface Props {
    outsideChilds?: React.ReactNode
    children: React.ReactNode
    redirectUnlogged?: boolean
}

const Page = ({ children, outsideChilds, redirectUnlogged }: Props) => {
    const { user, isLogged } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (redirectUnlogged && !isLogged()) navigate(routes.Home)
    }, [isLogged, navigate, redirectUnlogged])

    return (
        <div>
            <ScrollRestoration/>
            <Header/>
            <div className={s.content}>{children}</div>
            {outsideChilds}
            <Footer/>
        </div>
    );
}

export default Page;