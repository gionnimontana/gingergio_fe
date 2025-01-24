import FancyHeader from '../fancyHeader/FancyHeader';
import s from './FancySection.module.css';

interface Props {
    header?: string
    content?: string | string[] | React.ReactNode
    children?: React.ReactNode
}

const FancySection = ({ header, content, children }: Props) => {

  const contentIsArray = Array.isArray(content)

  return (
    <div className={s.container}>
        {header ? <FancyHeader content={header}/> : null}
        {content 
          ? contentIsArray 
            ? content.map((item, index) => <div className={s.content} key={index}>{item}</div>)
           : <div className={s.content}>{content}</div> 
        : null}
        {children}
    </div>
  );
}

export default FancySection;