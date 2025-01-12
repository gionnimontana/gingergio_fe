import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import s from './Page.module.css';

interface Props {
    children: React.ReactNode
}

const Page = ({ children }: Props) => {
    return (
        <div>
            <Header/>
            <div className={s.content}>{children}</div>
            <Footer/>
        </div>
    );
}

export default Page;