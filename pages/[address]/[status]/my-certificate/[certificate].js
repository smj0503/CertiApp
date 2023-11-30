import { useRouter } from "next/router";

import TopBar from "@/components/TopBar";
import Header from "@/components/Certificate/Header";
import ItemContainer from "@/components/Certificate/ItemContainer";

import styles from "../../../../styles/Certificate.module.css";

export default function ()
{
    const router = useRouter();

    return (
        <TopBar hasSession={true}>
            <div className={ styles.container }>
                <div>
                    <Header/>
                    <ItemContainer/>
                </div>
            </div>
        </TopBar>
    );
}