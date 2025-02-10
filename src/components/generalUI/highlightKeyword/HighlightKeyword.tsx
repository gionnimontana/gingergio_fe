import React from "react";
import s from "./HighlightKeyword.module.css";

interface Props {
  text: string | React.ReactNode;
  keywords?: string[];
  className?: string;
}

const HighlightKeyword: React.FC<Props> = ({ text, keywords, className }) => {
  if (!text || !keywords || keywords.length === 0 || typeof text !== "string") {
    return <div className={className}>{text}</div>;
  }

  // Escape keywords for regex
  const escapedKeywords = keywords.map(word => word.replace(/[-\/\^$*+?.()|[\]{}]/g, '\\$&'));
  const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi");
  
  const parts = text.split(regex);
  
  return (
    <div className={className}>
      {parts.map((part, index) =>
        keywords.some(keyword => keyword.toLowerCase() === part.toLowerCase()) ? (
          <b className={s.bold} key={index}>{part}</b>
        ) : (
          part
        )
      )}
    </div>
  );
};

export default HighlightKeyword;