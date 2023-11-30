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
                    <div className={ styles.certificates }>
                        <Collection
                            image="/assets/photo/photo-ai-blockchain-education.png"
                            href="https://honamict.kr/front/M0000151/program/programRequest.do?pgmId=PM000091"
                            category="Education Program"
                            date="2023.05.31"
                            publisher="Gwangju ICT Innovation Square · Goorm"
                            title="A Blockchain Education"
                        />
                        <Collection
                            image="/assets/photo/photo-defi.png"
                            href="https://fastcampus.co.kr/dev_online_defi"
                            category="Education Program"
                            date="2021.08.01"
                            publisher="FastCampus"
                            title="[Fast Campus] DeFi Deep Dive"
                        />
                    </div>
                </div>
            </div>
        </TopBar>
    );
}