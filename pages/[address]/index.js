import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";

import TopBar from "@/components/TopBar";
import EmptyContainer from "@/components/EmptyContainer";
import SortButton from "@/components/SortButton";
import Collection from "@/components/Collection";

import styles from "../../styles/MyCertificate.module.css";
import IconShare from "../../public/assets/icon-share.svg";

export default function ()
{
    const { t } = useTranslation("common");
    const router = useRouter();

    const [myCertificates, setMyCertificates] = useState([]);

    return (
        <TopBar hasSession={true}>
            <div className={ styles.container }>
                {
                    myCertificates.length > 0 ? (
                        <div>
                            <div className={ styles.controller }>
                                <div className={ styles.header }>
                                    <div>
                                        <span className={ styles.title }>{ t("myCertificates.belongsTo") }</span>
                                        <span className={ styles.count }>{ t("myCertificates.count") }</span>
                                    </div>
                                    <button data-button-animation={true} type="button" className={ styles.copyButton }>
                                        <span>{ t("myCertificates.shareYourList") }</span>
                                        <IconShare/>
                                    </button>
                                </div>
                                <div className={ styles. category }>
                                    <SortButton>{ t("myCertificates.all") }</SortButton>
                                    <SortButton>{ t("myCertificates.diploma") }</SortButton>
                                    <SortButton>{ t("myCertificates.contest") }</SortButton>
                                    <SortButton>{ t("myCertificates.license") }</SortButton>
                                    <SortButton>{ t("myCertificates.others") }</SortButton>
                                </div>
                            </div>
                            <div className={ styles.certificates }>
                                <Collection
                                    image="/assets/photo/photo-ai-blockchain-education.png"
                                    href="https://honamict.kr/front/M0000151/program/programRequest.do?pgmId=PM000091"
                                    category="Education Program"
                                    date="2023.05.31"
                                    publisher="Gwangju ICT Innovation Square · Goorm"
                                    title="A Blockchain Education"
                                />
                            </div>
                        </div>
                    ) : (
                        <EmptyContainer hasSession={true}/>
                    )
                }
            </div>
        </TopBar>
    );
}