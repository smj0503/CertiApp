import Link from "next/link";
import Image from "next/image";

import styles from "./Collection.module.css";

export default function ({ category, date, image, publisher, children })
{
    return (
        <div className={ styles.container }>
            <Image src={ image } alt="image" width={464} height={517}/>
            <div className={ styles.info }>
                <div className={ styles.head }>
                    <div className={ styles.category }>
                        <label>{ category }</label>
                    </div>
                    <span className={ styles.date }>{ date }</span>
                </div>
                <div className={ styles.description }>
                    <span className={ styles.name }>{ children }</span>
                    <span className={ styles.publisher }>{ publisher }</span>
                </div>
            </div>
        </div>
    )
}