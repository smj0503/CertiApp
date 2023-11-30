import TopBar from "@/components/TopBar";
import SortButton from "@/components/SortButton";
import Collection from "@/components/Collection";

import styles from "../../../../styles/MyCertificate.module.css";
import IconShare from "../../../../public/assets/icon-share.svg";

export default function ()
{
    return (
        <TopBar hasSession={true}>
            <div className={ styles.container }>
                <div>
                    <div className={ styles.controller }>
                        <div className={ styles.header }>
                            <div>
                                <span className={ styles.title }>{ "Sony’s Digital Certificate" }</span>
                                <span className={ styles.count }>{ "6개" }</span>
                            </div>
                            <button type="buttoon" className={ styles.copyButton }>
                                <span>{ "Share your list" }</span>
                                <IconShare/>
                            </button>
                        </div>
                        <div className={ styles. category }>
                            <SortButton>{ "All" }</SortButton>
                            <SortButton>{ "Diploma" }</SortButton>
                            <SortButton>{ "Contest" }</SortButton>
                            <SortButton>{ "License" }</SortButton>
                            <SortButton>{ "Others" }</SortButton>
                        </div>
                    </div>
                </div>
            </div>
        </TopBar>
    );
}