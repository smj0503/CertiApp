import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";

import TopBar from "@/components/TopBar";
import EmptyContainer from "@/components/EmptyContainer";
import SortButton from "@/components/SortButton";
import Collection from "@/components/Collection";
import Toast from "@/components/Toast/Share";

import styles from "../../styles/MyCertificate.module.css";
import IconShare from "../../public/assets/icon-share.svg";

export default function ()
{
    const { t } = useTranslation("common");
    const router = useRouter();

    const [myCertificates, setMyCertificates] = useState([]);

    const [isCopied, setIsCopied] = useState(false);

    const share = () =>
    {
        setIsCopied(true);
    };

    const close = () =>
    {
        setIsCopied(false);
    };

    return (
        <TopBar hasSession={true}>
            <div className={ styles.container }>
                <div>
                    <div className={ styles.controller }>
                        <div className={ styles.header }>
                            <div>
                                <span className={ styles.title }>{ t("myCertificates.belongsTo", { username: "Sony" }) }</span>
                                <span className={ styles.count }>{ t("myCertificates.count", { count: 3 }) }</span>
                            </div>
                            <button data-button-animation={true} type="button" className={ styles.copyButton } onClick={ share }>
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
                        <Toast show={ isCopied } close={ close }/>
                    </div>

                    <div className={ styles.certificates }>
                        <Collection
                            image="/assets/photo/photo-certificate-1.png"
                            href="http://localhost:3000/0x2716150Ceb632D6a3C46DC5F577E0B1248CB008c/ProtocolCamp2nd"
                            category="Diploma"
                            date="2022.09.06"
                            publisher="Hanhwa Dreamplus X Hashed"
                            title="Protocol Camp 2nd"
                        />
                        <Collection
                            image="/assets/photo/photo-certificate-2.png"
                            href="https://honamict.kr/front/M0000151/program/programRequest.do?pgmId=PM000091"
                            category="Diploma"
                            date="2021.08.30"
                            publisher="Gwangju ICT Innovation Square · Goorm"
                            title="[ICT Innovation] Blockchain Education"
                        />
                        <Collection
                            image="/assets/photo/photo-certificate-3.png"
                            href="https://honamict.kr/front/M0000151/program/programRequest.do?pgmId=PM000091"
                            category="Contest"
                            date="2023.09.05"
                            publisher="GICON"
                            title="Digital Region Problem Solving Contest"
                        />
                    </div>
                </div>
                {/*{*/}
                {/*    myCertificates.length > 0 ? (*/}
                {/*        <div>*/}
                {/*            <div className={ styles.controller }>*/}
                {/*                <div className={ styles.header }>*/}
                {/*                    <div>*/}
                {/*                        <span className={ styles.title }>{ t("myCertificates.belongsTo") }</span>*/}
                {/*                        <span className={ styles.count }>{ t("myCertificates.count") }</span>*/}
                {/*                    </div>*/}
                {/*                    <button data-button-animation={true} type="button" className={ styles.copyButton }>*/}
                {/*                        <span>{ t("myCertificates.shareYourList") }</span>*/}
                {/*                        <IconShare/>*/}
                {/*                    </button>*/}
                {/*                </div>*/}
                {/*                <div className={ styles. category }>*/}
                {/*                    <SortButton>{ t("myCertificates.all") }</SortButton>*/}
                {/*                    <SortButton>{ t("myCertificates.diploma") }</SortButton>*/}
                {/*                    <SortButton>{ t("myCertificates.contest") }</SortButton>*/}
                {/*                    <SortButton>{ t("myCertificates.license") }</SortButton>*/}
                {/*                    <SortButton>{ t("myCertificates.others") }</SortButton>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*            <div className={ styles.certificates }>*/}
                {/*                <Collection*/}
                {/*                    image="/assets/photo/photo-ai-blockchain-education.png"*/}
                {/*                    href="https://honamict.kr/front/M0000151/program/programRequest.do?pgmId=PM000091"*/}
                {/*                    category="Education Program"*/}
                {/*                    date="2023.05.31"*/}
                {/*                    publisher="Gwangju ICT Innovation Square · Goorm"*/}
                {/*                    title="A Blockchain Education"*/}
                {/*                />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    ) : (*/}
                {/*        <EmptyContainer hasSession={true}/>*/}
                {/*    )*/}
                {/*}*/}
            </div>
        </TopBar>
    );
}
