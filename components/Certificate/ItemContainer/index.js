import Image from "next/image";

import  styles from "./ItemContainer.module.css";

export default function ({ hasSession })
{
    return (
        <div className={ styles.itemContainer }>
            <Image src="/assets/photo/photo-defi.png" alt="image" width={586} height={653} className={ styles.image } priority={true}/>
            <div className={ styles.info }>
                <div className={ styles.head }>
                    <div className={ styles.chips }>
                        <div className={ styles.category }>{ "Diploma" }</div>
                        <div className={ styles.date }>{ "2023/05/31 - 수료" }</div>
                    </div>
                    <h1 className={ styles.title }>{ "[작심 30일] 인공지능 블록체인 교육" }</h1>
                </div>

            </div>
        </div>
    )
}