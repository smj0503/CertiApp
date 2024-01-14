import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";
import { asyncEffect } from "@/common/utils";
import LocalStorage from "@/common/localstorage.manager";

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
    const walletAddress = LocalStorage.shared.getItem('walletAddress') || null;

    const [hasSession, setSession] = useState(false);
    const [username, setName] = useState('');
    const [myCertificates, setMyCertificates] = useState([]);
    const [isCopied, setIsCopied] = useState(false);

    /* APIs */
    const { getUsername } = useAccountModule();
    const { getMyCertificateList } = useCertificateModule();

    /* Life Cycle */
    asyncEffect(async () =>
    {
        setSession(walletAddress === router.asPath.replace('/', ''));

        const result = await getUsername(router.asPath.replace('/', ''));
        setName(result.user_name);

        const myCertificates = await getMyCertificateList(router.asPath.replace('/', ''));
        console.log('certificates : ', myCertificates);
        setMyCertificates(myCertificates);
    }, []);

    /* User Actions */
    // const share = () =>
    // {
    //     setIsCopied(true);
    // };
    const share = async () =>
    {
        const url = `https://app.certi.world/${router.asPath}`;
    };

    const close = () =>
    {
        setIsCopied(false);
    };

    console.log('session : ', hasSession);

    return (
        <TopBar hasSession={ hasSession }>
            <div className={ styles.container }>
                {
                    myCertificates && myCertificates.length > 0 ? (
                        <div>
                            <div className={ styles.controller }>
                                <div className={ styles.header }>
                                    <div>
                                        <span className={ styles.title }>{ t("myCertificates.belongsTo", { username: username }) }</span>
                                        <span className={ styles.count }>{ t("myCertificates.count", { count: myCertificates.length }) }</span>
                                    </div>
                                    <button data-button-animation={true} type="button" className={ styles.copyButton } onClick={ share }>
                                        <span>{ t("myCertificates.shareYourList") }</span>
                                        <IconShare/>
                                    </button>
                                </div>
                                {/*<div className={ styles.category }>*/}
                                {/*    <SortButton>{ t("myCertificates.all") }</SortButton>*/}
                                {/*    <SortButton>{ t("myCertificates.diploma") }</SortButton>*/}
                                {/*    <SortButton>{ t("myCertificates.contest") }</SortButton>*/}
                                {/*    <SortButton>{ t("myCertificates.license") }</SortButton>*/}
                                {/*    <SortButton>{ t("myCertificates.others") }</SortButton>*/}
                                {/*</div>*/}
                            </div>
                            <div className={ styles.certificates }>
                                {
                                    myCertificates.map((certificate, index) => {
                                        return (
                                            <Collection
                                                key={ index }
                                                image={ certificate.certificate_image }
                                                href={ `${router.asPath}/${certificate.certificate_name}`}
                                                category={ certificate.certificate_category }
                                                date={ certificate.certificate_end_date.substring(10, -1) }
                                                publisher={ certificate.company_name }
                                                title={ certificate.certificate_name }
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    ) : (
                        <EmptyContainer hasSession={ hasSession }/>
                    )
                }
            </div>
        </TopBar>
    );
}
