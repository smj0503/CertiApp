import { useRouter } from "next/router";

import styles from "./UrlCopy.module.css";

export default function ()
{
    const router = useRouter();
    const url = `${process.env.NEXT_PUBLIC_HOST}${router.asPath}`;

    const copy = async () =>
    {
        await navigator.clipboard.writeText(url);
    };

    return (
        <div className={ styles.urlContainer }>
            <span className={ styles.url }>{ url }</span>
            <button type="button" className={ styles.copyButton } data-button-animation={true} onClick={ copy }>{ "복사" }</button>
        </div>
    )
}