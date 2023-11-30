import styles from "./Header.module.css";
import IconChevronRight from "@/public/assets/icon-chevron-right.svg";

export default function ({})
{
    return (
        <div className={ styles.header }>
            <span>{ "MY CERTIFICATE" }</span><IconChevronRight/>
            <span>{ "PROGRAM" }</span><IconChevronRight/>
            <span className={ styles.certificateName }>{ "[작심 30일] 인공지능 블록체인 교육" }</span>
        </div>
    )
}