import FancyHeader from '../fancyHeader/FancyHeader';
import HighlightKeyword from '../highlightKeyword/HighlightKeyword';
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
    keyWords?: string[]
}

const FancySection = ({ header, content, img, className, keyWords }: Props) => {

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
            <div className={s.contentContainer}>
              {contentIsArray ? 
                content.map((item, index) => (
                <HighlightKeyword className={s.content} text={item} key={index} keywords={keyWords}/>
              )) : (
                <HighlightKeyword className={s.content} text={content} keywords={keyWords}/>
              )}
            </div> 
          ) : null}
        </div>
    </div>
  );
}

export default FancySection;