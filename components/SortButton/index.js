import styles from "./SortButton.module.css";

export default function ({ onClick, children })
{
    return (
        <button type="button" className={ styles.button } onClick={ onClick }>
            <label>{ children }</label>
        </button>
    )
}