import FancyHeader from '../fancyHeader/FancyHeader';
import s from './FancySection.module.css';

interface Props {
    header?: string
    content?: string | React.ReactNode
    children?: React.ReactNode
}

const  FancySection = (props: Props) => {

  return (
    <div className={s.container}>
        {props.header ? <FancyHeader content={props.header}/> : null}
        {props.content ? <div className={s.content}>{props.content}</div> : null}
        {props.children}
    </div>
  );
}

export default FancySection;