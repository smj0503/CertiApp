import Link from "next/link";

import styles from "./JobOpenings.module.css";
import Image from "next/image";

export default function ({ href, image, publisher, title })
{
    return (
        <Link href={ href } className={ styles.container }>
            <Image src={ image } alt="image" width={464} height={338} className={ styles.image } priority={true}/>
            <div className={ styles.description }>
                <span className={ styles.name }>{ title }</span>
                <span className={ styles.publisher }>{ publisher }</span>
            </div>
        </Link>
    )
}