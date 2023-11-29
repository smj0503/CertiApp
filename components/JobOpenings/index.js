import Link from "next/link";

import styles from "./JobOpenings.module.css";
import Image from "next/image";

export default function ({ href, image, publisher, children })
{
    return (
        <Link href={ href } className={ styles.container }>
            <Image src={ image } alt="image" width={464} height={338} className={ styles.image }/>
            <div className={ styles.description }>
                <span className={ styles.name }>{ children }</span>
                <span className={ styles.publisher }>{ publisher }</span>
            </div>
        </Link>
    )
}