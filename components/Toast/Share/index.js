import useTranslation from "next-translate/useTranslation";
import { useEffect } from "react";

import styles from "./Share.module.css";
import IconCopy from "../../../public/assets/icon-copy.svg";

export default function ({ show, close })
{
    const { t } = useTranslation("common");

    useEffect(() =>
    {
        if(show)
        {
            setTimeout(() =>
            {
                close();
            }, 3000);
        }
    }, [show]);

    return (
        <div className={ styles.toast } data-show={ show }>
            <IconCopy/>
            <div>
                <span className={ styles.title }>{ "Link copied to clipboard" }</span>
                <span className={ styles.subTitle }>{ "Share with your partners" }</span>
            </div>
        </div>
    )
}
