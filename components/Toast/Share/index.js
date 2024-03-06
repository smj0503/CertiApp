import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";

import styles from "./Share.module.css";
import IconCopy from "../../../public/assets/icon-copy.svg";

export default function ({ show, setIsCopied })
{
    const { t } = useTranslation("common");

    useEffect(() =>
    {
        if(show)
        {
            setTimeout(() =>
            {
                setIsCopied(false);
            }, 3000);
        }
    }, [show]);

    return (
        <div className={ styles.toast }>
            <IconCopy/>
            <span className={ styles.message }>{ "증명서 링크가 복사되었습니다." }</span>
        </div>
    )
}
