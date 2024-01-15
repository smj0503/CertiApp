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
                        image="/assets/photo/photo-certificate-2.png"
                        category="Diploma"
                        date="2023.01.06"
                        publisher="한화 드림플러스 X Hashed"
                        title="프로토콜 캠프 2기 수료증"
                    />
                </div>
            </div>
        </TopBar>
    );
}
