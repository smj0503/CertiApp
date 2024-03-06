import Link from "next/link";

import styles from "./LinkButton.module.css";

export default function ({ href, name, logo })
{
    return (
        <Link href={ href } className={ styles.button }>
            <div className={ styles.logo }>
                { logo }
            </div>
            <span className={ styles.name }>{ name }</span>
        </Link>
    )
}