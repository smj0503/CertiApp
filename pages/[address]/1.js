import { useState } from "react";
import { asyncEffect } from "@/common/utils";
import LocalStorage from "@/common/localstorage.manager";

import TopBar from "@/components/TopBar";
import Header from "@/components/Certificate/Header";
import ItemContainer from "@/components/Certificate/ItemContainer";

import styles from "../../styles/Certificate.module.css";

export default function ()
{
    const walletAddress = LocalStorage.shared.getItem('walletAddress');

    const [hasSession, setSession] = useState(false);

    asyncEffect(async () =>
    {
        setSession(!!walletAddress);
    }, []);

    return (
        <TopBar hasSession={ hasSession }>
            <div className={ styles.container }>
                <div>
                    <Header title="[ICT 이노베이션 스퀘어] 블록체인 교육 과정"/>
                    <ItemContainer
                        hasSession={ hasSession }
                        image="/assets/photo/photo-certificate-1.png"
                        category="Diploma"
                        date="2021.08.30"
                        publisher="광주 ICT Innovation · goorm"
                        title="[ICT 이노베이션 스퀘어] 블록체인 교육 과정"
                    />
                </div>
            </div>
        </TopBar>
    );
}
