import Image from "next/image";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import Switch from "@/components/Switch";

import styles from "./ItemContainer.module.css";

export default function ({ hasSession })
{
    const { t } = useTranslation("common");
    const router = useRouter();

    return (
        <div className={ styles.itemContainer }>
            <Image src="/assets/photo/photo-certificate-1.png" alt="image" width={586} height={653} className={ styles.image } priority={true}/>
            <div className={ styles.info }>
                <div>
                    <div className={ styles.head }>
                        <div className={ styles.chips }>
                            <div className={ styles.category }>{ "Diploma" }</div>
                            <div className={ styles.date }>{ "2022/09/06 - Completion" }</div>
                        </div>
                        <h1 className={ styles.title }>{ "Protocol Camp 2nd" }</h1>
                        <div className={ styles.company }>
                            <Image src="/assets/photo/photo-protocol-camp.png" alt="company image" width={45} height={45} priority={true} className={ styles.companyImage }/>
                            <div>
                                <span className={ styles.gray }>{ t('details.company') }</span>
                                <span className={ styles.companyName }>{ "Hanwha Dreamplus X Hashed" }</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className={ styles.acquisitionContainer }>
                            {
                                hasSession && (
                                    <div className={ styles.acquire }>
                                        <h1>{ t('details.acquiredCompetencies') }</h1>
                                        <Link href={ `${router.asPath}/competencies` } className={ styles.editButton } data-button-animation={true}>{ "Edit >" }</Link>
                                    </div>
                                )
                            }
                            {
                                hasSession && <p>{ t("details.pleaseWrite") }</p>
                            }
                        </div>
                        <span className={ styles.details }>{ t("details.moreDetails") }</span>
                    </div>
                </div>
                {
                    hasSession && (
                        <div className={ styles.openToThePublic }>
                            <div>
                                <label>{ t("details.openToThePublic") }</label>
                                <span>{ t("details.openPublicDescription") }</span>
                            </div>
                            <Switch/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
