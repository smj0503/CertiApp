import useTranslation from "next-translate/useTranslation";
import Link from "next/link";

import styles from "./EmptyContainer.module.css";
import IconEmpty from "../../public/assets/icon-empty.svg";

export default function ({ hasSession })
{
    const { t } = useTranslation("common");

    return (
        <div className={ styles.container }>
            <div className={ styles.empty }>
                <IconEmpty/>
                <h1 className={ styles.emptyMessage }>{ t("myCertificates.emptyMessage") }</h1>
                {
                    hasSession && (
                        <Link href={ "https://forms.gle/asGbSi2xF4rTqsNt9" } className={ styles.addButton }>
                            <label>{ t("myCertificates.addCertificate") }</label>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}