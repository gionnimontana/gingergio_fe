import { useEffect, useState } from "react";
import { dictionary, SupportedLang } from "./dictionary";

const useTranslations = (): (key: keyof typeof dictionary) => string => {
    const [lang, setLang] = useState<SupportedLang>('it');

    useEffect(() => {
        const storedLang = localStorage.getItem('lang') as SupportedLang;
        const browserLang = navigator.language.slice(0, 2) as SupportedLang;
        if (storedLang) {
            setLang(storedLang);
        } else {
            setLang(browserLang);
        }
    }, []);

    return (key: keyof typeof dictionary) => {
        if (dictionary[key] && dictionary[key][lang]) {
            return dictionary[key][lang] as string;
        }
        return dictionary[key]['en'];
    }
}

export default useTranslations;