/**
 * Core Libraries
 */
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";
import { asyncEffect } from "@/common/utils";
import LocalStorage from "@/common/localstorage.manager";

/**
 * APIs
 */
import useAccountModule from "@/apis/account.api";
import useCertificateModule from "@/apis/certificate.api";

/**
 * UI Components
 */
import TopBar from "@/components/TopBar";
import EmptyContainer from "@/components/EmptyContainer";
import SortButton from "@/components/SortButton";
import Collection from "@/components/Collection";
import SharePopup from "@/components/Popup/Share";

/**
 * Styles & Resources
 */
import styles from "../../styles/MyCertificate.module.css";
import IconShare from "../../public/assets/icon-share.svg";

export default function ()
{
    /* Local Fields */
    const { t } = useTranslation("common");
    const router = useRouter();
    const walletAddress = LocalStorage.shared.getItem('walletAddress');

    const [hasSession, setSession] = useState(false);
    const [username, setName] = useState('');
    const [myCertificates, setMyCertificates] = useState([]);
    const [open, setOpen] = useState(false);

    /* APIs */
    const { getUsername } = useAccountModule();
    // const { getMyCertificateList } = useCertificateModule();

    /* Life Cycle */
    asyncEffect(async () =>
    {
        setSession(walletAddress === router.asPath.replace('/', ''));

        const result = await getUsername(router.asPath.replace('/', ''));
        setName(result.user_name);

        // const myCertificates = await getMyCertificateList(router.asPath.replace('/', ''));
        // setMyCertificates(myCertificates);
    }, []);

    /* User Actions */
    const onClick = async (id) =>
    {
        await router.push({
            pathname: `${router.asPath}/${id}`,
            query: { id: id, walletAddress: router.asPath.replace('/', '') },
        });
    };

    const share = async () =>
    {
        setOpen(true);
    };

    const close = () =>
    {
        setOpen(false);
    };

    console.log('session : ', hasSession);

    return (
        <>
            {
                open && <SharePopup close={ close }/>
            }
            <TopBar hasSession={ hasSession }>
                <div className={ styles.container }>
                    <div className={ styles.controller }>
                        <div className={ styles.header }>
                            <div>
                                <span className={ styles.title }>{ t("myCertificates.belongsTo", { username: "박민기" }) }</span>
                                <span className={ styles.count }>{ t("myCertificates.count", { count: 3 }) }</span>
                            </div>
                            <button data-button-animation={true} type="button" className={ styles.copyButton } onClick={ share }>
                                <span>{ t("myCertificates.shareYourList") }</span>
                                <IconShare/>
                            </button>
                        </div>
                        <div className={ styles.category }>
                            <SortButton>{ t("myCertificates.all") }</SortButton>
                            <SortButton>{ t("myCertificates.diploma") }</SortButton>
                            <SortButton>{ t("myCertificates.contest") }</SortButton>
                            <SortButton>{ t("myCertificates.license") }</SortButton>
                            <SortButton>{ t("myCertificates.others") }</SortButton>
                        </div>
                    </div>
                    {/*<EmptyContainer hasSession={ hasSession }/>*/}
                    {/*{*/}
                    {/*    myCertificates && myCertificates.length > 0 ? (*/}
                    {/*        <div>*/}
                    {/*            <div className={ styles.controller }>*/}
                    {/*                <div className={ styles.header }>*/}
                    {/*                    <div>*/}
                    {/*                        <span className={ styles.title }>{ t("myCertificates.belongsTo", { username: "박민기" }) }</span>*/}
                    {/*                        <span className={ styles.count }>{ t("myCertificates.count", { count: 3 }) }</span>*/}
                    {/*                    </div>*/}
                    {/*                    <button data-button-animation={true} type="button" className={ styles.copyButton } onClick={ share }>*/}
                    {/*                        <span>{ t("myCertificates.shareYourList") }</span>*/}
                    {/*                        <IconShare/>*/}
                    {/*                    </button>*/}
                    {/*                </div>*/}
                    {/*                {*/}
                    {/*                    isCopied && <Toast show={ isCopied } close={ close }/>*/}
                    {/*                }*/}
                    {/*                <div className={ styles.category }>*/}
                    {/*                    <SortButton>{ t("myCertificates.all") }</SortButton>*/}
                    {/*                    <SortButton>{ t("myCertificates.diploma") }</SortButton>*/}
                    {/*                    <SortButton>{ t("myCertificates.contest") }</SortButton>*/}
                    {/*                    <SortButton>{ t("myCertificates.license") }</SortButton>*/}
                    {/*                    <SortButton>{ t("myCertificates.others") }</SortButton>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*            <div className={ styles.certificates }>*/}
                    {/*                {*/}
                    {/*                    myCertificates && myCertificates.length > 0 && (*/}
                    {/*                        myCertificates.map((certificate, index) => {*/}
                    {/*                            return (*/}
                    {/*                                <Collection*/}
                    {/*                                    key={ index }*/}
                    {/*                                    id={ certificate.id }*/}
                    {/*                                    image={ certificate.certificate_image }*/}
                    {/*                                    onClick={ onClick }*/}
                    {/*                                    category={ certificate.certificate_category }*/}
                    {/*                                    date={ certificate.certificate_end_date.substring(10, -1) }*/}
                    {/*                                    publisher={ certificate.company_name }*/}
                    {/*                                    title={ certificate.certificate_name }*/}
                    {/*                                />*/}
                    {/*                            )*/}
                    {/*                        })*/}
                    {/*                    )*/}
                    {/*                }*/}
                    {/*                */}
                    {/*                Dummies*/}
                    {/*                <Collection*/}
                    {/*                    image="/assets/photo/photo-certificate-1.png"*/}
                    {/*                    href={ `${router.asPath}/1` }*/}
                    {/*                    category="Diploma"*/}
                    {/*                    date="2021.08.30"*/}
                    {/*                    publisher="광주 ICT Innovation"*/}
                    {/*                    title="[ICT 이노베이션 스퀘어] 블록체인 교육 과정"*/}
                    {/*                />*/}
                    {/*                <Collection*/}
                    {/*                    image="/assets/photo/photo-certificate-2.png"*/}
                    {/*                    href={ `${router.asPath}/2` }*/}
                    {/*                    category="Diploma"*/}
                    {/*                    date="2023.01.06"*/}
                    {/*                    publisher="한화 드림플러스 X Hashed"*/}
                    {/*                    title="프로토콜 캠프 2기 수료증"*/}
                    {/*                />*/}
                    {/*                <Collection*/}
                    {/*                    image="/assets/photo/photo-certificate-3.png"*/}
                    {/*                    href={ `${router.asPath}/3` }*/}
                    {/*                    category="Contest"*/}
                    {/*                    date="2023.09.05"*/}
                    {/*                    publisher="광주정보문화산업진흥원"*/}
                    {/*                    title="디지털 신기술 지역 문제 해결 아이디어 공모전"*/}
                    {/*                />*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    ) : (*/}
                    {/*        <EmptyContainer hasSession={ hasSession }/>*/}
                    {/*    )*/}
                    {/*}*/}
                </div>
            </TopBar>
        </>
    );
}
