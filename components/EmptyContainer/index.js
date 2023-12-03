import Link from "next/link";

import styles from "./EmptyContainer.module.css";
import IconEmpty from "../../public/assets/icon-empty.svg";

export default function ({ hasSession })
{
    return (
        <div className={ styles.container }>
            <div className={ styles.empty }>
                <IconEmpty/>
                <h1 className={ styles.emptyMessage }>{ "There are no certificate in this account" }</h1>
                {
                    hasSession && (
                        <Link href={ "https://forms.gle/asGbSi2xF4rTqsNt9" } className={ styles.addButton }>
                            <label>{ "Add a certificate" }</label>
                        </Link>
                    )
                }
            </div>
        </div>
    )
}