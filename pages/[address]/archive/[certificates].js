import TopBar from "@/components/TopBar";
import Header from "@/components/Certificate/Header";
import ItemContainer from "@/components/Certificate/ItemContainer";

import styles from "../../../styles/Certificate.module.css";

export default function ()
{
    return (
        <TopBar hasSession={false}>
            <div className={ styles.container }>
                <div>
                    <Header/>
                    <ItemContainer hasSession={false} edited={true}/>
                </div>
            </div>
        </TopBar>
    );
}
