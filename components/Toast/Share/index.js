import useTranslation from "next-translate/useTranslation";

import styles from "./Share.module.css";
import IconCopy from "../../../public/assets/icon-copy.svg";

export default function ({ show })
{
    const { t } = useTranslation("common");

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
