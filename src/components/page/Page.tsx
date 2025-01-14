import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import s from './Page.module.css';

interface Props {
    outsideChilds?: React.ReactNode
    children: React.ReactNode
}

const Page = ({ children, outsideChilds }: Props) => {
    return (
        <div>
            <Header/>
            <div className={s.content}>{children}</div>
            {outsideChilds}
            <Footer/>
        </div>
    );
}

export default Page;