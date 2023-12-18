import styles from "./Counter.module.css";

export default function ({ length, maxLength })
{
    return (
        <div className={ styles.counter }>
            <span data-length={ !!length }>{ length }</span>
            <span className={ styles.counter }>{ `/ ${maxLength}` }</span>
        </div>
    );
}
