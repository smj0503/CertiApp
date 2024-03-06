import styles from "./LinkButton.module.css";

export default function ({ href, name, logo })
{
    return (
        <a href={ href } className={ styles.button } target="_blank" rel="noopener noreferrer">
            <div className={ styles.logo }>
                { logo }
            </div>
            <span className={ styles.name }>{ name }</span>
        </a>
    )
}