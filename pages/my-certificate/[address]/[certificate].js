import TopBar from "@/components/TopBar";

import styles from "../../../styles/Archive.module.css";

export default function ()
{
    return (
        <TopBar hasSession={true}>
            <div className={ styles.container }>
                <h1>{ "Login Success!" }</h1>
            </div>
        </TopBar>
    )
}