import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import Switch from "@/components/Switch";

import styles from "./ItemContainer.module.css";

export default function ({ hasSession })
{
    const { t } = useTranslation("common");

    return (
        <div className={ styles.itemContainer }>
            <Image src="/assets/photo/photo-protocol-camp.png" alt="image" width={586} height={653} className={ styles.image } priority={true}/>
            <div className={ styles.info }>
                <div>
                    <div className={ styles.head }>
                        <div className={ styles.chips }>
                            <div className={ styles.category }>{ "Diploma" }</div>
                            <div className={ styles.date }>{ "2023.01.06" }</div>
                        </div>
                        <h1 className={ styles.title }>{ "Protocol Camp 2nd" }</h1>
                        <div className={ styles.company }>
                            <Image src="/assets/photo/photo-protocol-camp.png" alt="company image" width={45} height={45} priority={true} className={ styles.companyImage }/>
                            <div>
                                <span className={ styles.gray }>{ "company" }</span>
                                <span className={ styles.companyName }>{ "Hanwha Dreamplus X Hashed" }</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={ styles.descriptionContainer }>
                            <h1>{ t("details.programDescription") }</h1>
                            <p>{ "Congratulations on the completion of the blockchain boot camp protocol camp with Dream Plus and Hashed." }</p>
                        </div>
                        <span className={ styles.details }>{ t("details.moreDetails") }</span>
                    </div>
                </div>
                <div className={ styles.openToThePublic }>
                    <div>
                        <label>{ t("details.openToThePublic") }</label>
                        <span>{ t("details.openPublicDescription") }</span>
                    </div>
                    <Switch/>
                </div>
            </div>
        </div>
    )
}