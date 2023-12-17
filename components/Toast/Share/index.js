import useTranslation from "next-translate/useTranslation";

import styles from "./Share.module.css";
import IconCopy from "../../../public/assets/icon-copy.svg";

export default function ()
{
    const { t } = useTranslation("common");

    return (
        <div className={ styles.toast }>
            <IconCopy/>
            <div>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}
