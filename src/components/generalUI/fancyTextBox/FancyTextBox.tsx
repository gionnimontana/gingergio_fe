import FancyHeader from '../fancyHeader/FancyHeader';
import s from './FancyTextBox.module.css';

interface Props {
    header?: string
    content?: string
}

const  FancyTextBox = (props: Props) => {
  return (
    <div className={s.container}>
        {props.header ? <FancyHeader content={props.header}/> : null}
        {props.content ? <div className={s.content}>{props.content}</div> : null}
    </div>
  );
}

export default FancyTextBox;