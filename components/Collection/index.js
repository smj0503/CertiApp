import Link from "next/link";
import Image from "next/image";

import styles from "./Collection.module.css";

export default function ({ href, category, date, image, publisher, title })
{
    return (
        <Link data-button-animation={true} href={ href } className={ styles.container }>
            <img src={ image } alt="certificate image" width={464} height={517} className={ styles.image }/>
            <div className={ styles.info }>
                <div className={ styles.head }>
                    <div className={ styles.category } data-color={ category }>
                        <label>{ category }</label>
                    </div>
                    <span className={ styles.date }>{ date }</span>
                </div>
                <div className={ styles.description }>
                    <span className={ styles.name }>{ title }</span>
                    <span className={ styles.publisher }>{ publisher }</span>
                </div>
            </div>
        </Link>
    )
}
