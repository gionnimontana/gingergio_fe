import FancyHeader from '../fancyHeader/FancyHeader';
import s from './FancySection.module.css';

interface Props {
    header?: string
    content?: string | string[] | React.ReactNode
    img?: {
        src: string,
        alt?: string,
        right?: boolean
    }
    className?: string
}

const FancySection = ({ header, content, img, className }: Props) => {

  const contentIsArray = Array.isArray(content)
  const imgIsRight = img && img.right
  const imageClass = imgIsRight ? `${s.image} ${s.imageRight}` : s.image
  const containerClass = s.container + (className ? ' ' + className : '')

  return (
    <div className={containerClass}>
        {header ? <FancyHeader content={header}/> : null}
        <div className={s.innerContainer}>
          {img ? (
            <img className={imageClass} src={img.src} alt={img.alt}/>
          ) : null}
          {content ? (
            <div>
              {contentIsArray ? 
                content.map((item, index) => <div className={s.content} key={index}>{item}</div>)
                : <div className={s.content}>{content}</div> }
            </div> 
          ) : null}
        </div>
    </div>
  );
}

export default FancySection;