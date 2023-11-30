import { useRouter } from "next/router";
import Image from "next/image";

import TopBar from "@/components/TopBar";
import Header from "@/components/Certificate/Header";

import styles from "../../../../styles/Certificate.module.css";

export default function ()
{
    const router = useRouter();

    return (
        <TopBar hasSession={true}>
            <div className={ styles.container }>
                <div>
                    <Header/>
                    <div className={ styles.itemContainer }>
                        <Image src="/assets/photo/photo-defi.png" alt="image" width={586} height={653} className={ styles.image } priority={true}/>
                    </div>
                </div>
            </div>
        </TopBar>
    );
}