import styles from "./UrlCopy.module.css";

export default function ({ url })
{
    return (
        <div className={ styles.urlContainer }>
            <span className={ styles.url }>{ url }</span>
            <button type="button" className={ styles.copyButton } data-button-animation={true}>{ "복사" }</button>
        </div>
    )
}