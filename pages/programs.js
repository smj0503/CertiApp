import Link from "next/link";
import Image from "next/image";

import TopBar from "@/components/TopBar";

import styles from "../styles/Programs.module.css";

export default function ()
{
    return (
        <TopBar>
            <div className={ styles.container }>
                <div>
                    <div className={ styles.category }>
                        <h1 className={ styles.title }>{ "Popular Program" }</h1>
                        <span className={ styles.description }>{ "Let's meet the popular programs now!" }</span>
                    </div>
                    <Image src={ "/assets/photo/photo-klayton.png" } priority={true} width={1440} height={560} alt="klayton bootcamp"/>
                </div>

                <div>
                    <div className={ styles.category }>
                        <h1 className={ styles.title }>{ "Recommended for you" }</h1>
                        <span className={ styles.description }>{ "We will recommend programs that you might like" }</span>
                    </div>
                    <Image src={ "/assets/photo/photo-klayton.png" } priority={true} width={1440} height={560} alt="klayton bootcamp"/>
                </div>

                <div>
                    <div className={ styles.category }>
                        <h1 className={ styles.title }>{ "Recommended Job Openings" }</h1>
                        <span className={ styles.description }>{ "Job openings that fits your certificate" }</span>
                    </div>
                    <Image src={ "/assets/photo/photo-klayton.png" } priority={true} width={1440} height={560} alt="klayton bootcamp"/>
                </div>
            </div>
        </TopBar>
    )
}