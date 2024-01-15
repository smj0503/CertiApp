import { useRouter } from "next/router";
import { asyncEffect } from "@/common/utils";
import LocalStorage from "@/common/localstorage.manager";

import TopBar from "@/components/TopBar";
import Header from "@/components/Certificate/Header";
import ItemContainer from "@/components/Certificate/ItemContainer";

import styles from "../../styles/Certificate.module.css";

export default function ()
{
    const router = useRouter();

    asyncEffect(async () =>
    {
    }, []);

    return (
        <TopBar hasSession={true}>
            <div className={ styles.container }>
                <div>
                    <Header/>
                    <ItemContainer
                        hasSession={true}
                        image="/assets/photo/photo-certificate-3.png"
                        category="Diploma"
                        date="2023.09.05"
                        publisher="광주정보문화산업진흥원"
                        title="디지털 신기술 지역 문제 해결 아이디어 공모전"
                    />
                </div>
            </div>
        </TopBar>
    );
}
