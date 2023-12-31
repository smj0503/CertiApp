import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";
import { asyncEffect } from "@/common/utils";

import useAccountModule from "@/apis/account.api";
import useCertificateModule from "@/apis/certificate.api";

import TopBar from "@/components/TopBar";
import EmptyContainer from "@/components/EmptyContainer";
import SortButton from "@/components/SortButton";
import Collection from "@/components/Collection";
import Toast from "@/components/Toast/Share";

import styles from "../../styles/MyCertificate.module.css";
import IconShare from "../../public/assets/icon-share.svg";

export default function ()
{
    /* Local Fields */
    const { t } = useTranslation("common");
    const router = useRouter();

    const [username, setName] = useState('');
    const [myCertificates, setMyCertificates] = useState([]);
    const [isCopied, setIsCopied] = useState(false);

    /* APIs */
    const { getUsername } = useAccountModule();
    const { getMyCertificateList } = useCertificateModule();

    /* Life Cycle */
    // asyncEffect(async () =>
    // {
    //     const result = await getUsername("0x2716150Ceb632D6a3C46DC5F577E0B1248CB008c");
    //     setName(result.user_name)
    //
    //     const myCertificates = await getMyCertificateList("0x2716150Ceb632D6a3C46DC5F577E0B1248CB008c");
    //     setMyCertificates(myCertificates);
    // }, []);

    /* User Actions */
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
                <EmptyContainer hasSession={true}/>
                {/*{*/}
                {/*    myCertificates.length > 0 ? (*/}
                {/*        <div>*/}
                {/*            <div className={ styles.controller }>*/}
                {/*                <div className={ styles.header }>*/}
                {/*                    <div>*/}
                {/*                        <span className={ styles.title }>{ t("myCertificates.belongsTo", { username: username }) }</span>*/}
                {/*                        <span className={ styles.count }>{ t("myCertificates.count", { count: myCertificates.length }) }</span>*/}
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
