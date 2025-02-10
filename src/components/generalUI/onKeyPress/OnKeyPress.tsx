import { useEffect } from "react";

interface Props {
    keypress: string;
    callback: () => void;
    disable?: boolean;
}

const OnKeyPress = ({ keypress, callback, disable }: Props) => {
    useEffect(() => {
        const handleKeyPress = (e: any) => {
            if (e.key === keypress && !disable) {
                callback();
            }
        };
        document.addEventListener('keydown', handleKeyPress);
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);
    return null;
}

export default OnKeyPress;
