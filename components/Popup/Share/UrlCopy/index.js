import styles from "./UrlCopy.module.css";

export default function ({ url })
{
    const copy = () =>
    {

    };

    return (
        <div className={ styles.urlContainer }>
            <span className={ styles.url }>{ url }</span>
            <button type="button" className={ styles.copyButton } data-button-animation={true} onClick={ copy }>{ "복사" }</button>
        </div>
    )
}