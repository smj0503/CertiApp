import useTranslation from "next-translate/useTranslation";
import Link from "next/link";
import Image from "next/image";

import TopBar from "@/components/TopBar";
import Collection from "@/components/Collection";
import JobOpenings from "@/components/JobOpenings";

import styles from "../../styles/Programs.module.css";

export default function ()
{
    const { t } = useTranslation("common");

    return (
        <TopBar hasSession={true}>
            <div className={ styles.container }>
                <div>
                    <div className={ styles.category }>
                        <h1 className={ styles.title }>{ t("otherPrograms.popularProgram") }</h1>
                        <span className={ styles.description }>{ t("otherPrograms.popularProgramDescription") }</span>
                    </div>
                    <Link data-button-animation={true} href="https://lu.ma/7r8laggy">
                        <Image src={ "/assets/photo/photo-klaytn-bootcamp.png" } priority={true} width={1440} height={560} alt="klayton bootcamp" style={{ borderRadius: 6 }}/>
                    </Link>
                </div>

                <div>
                    <div className={ styles.category }>
                        <h1 className={ styles.title }>{ t("otherPrograms.recommendedForYou") }</h1>
                        <span className={ styles.description }>{ t("otherPrograms.recommendedForYouDescription") }</span>
                    </div>

                    <div className={ styles.programs }>
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
                        <Collection
                            image="/assets/photo/photo-likelion.png"
                            href="https://honamict.kr/front/M0000151/program/programRequest.do?pgmId=PM000064"
                            category="Education Program"
                            date="2021.08.27"
                            publisher="Gwangju ICT Innovation Square"
                            title="ICT Innovation Square Blockchain Edu"
                        />
                        <Collection
                            image="/assets/photo/photo-techit.png"
                            href="https://techit.education/school/kdt-blockchain-5th"
                            category="Education Program"
                            date="2023.05.31"
                            publisher="TECH!T"
                            title="[TECH!T] Blockchain School 5th"
                        />
                        <Collection
                            image="/assets/photo/photo-protocol-camp.png"
                            href="https://www.protocolcamp.com/"
                            category="Contest"
                            date="2023.08.10"
                            publisher="Hanwha · Hashed"
                            title="[Hanwha X Hashed] Protocol Camp 6th"
                        />
                        <Collection
                            image="/assets/photo/photo-blockchain-hackathon.png"
                            href="https://www.dreamplus.asia/programs/hackathon"
                            category="Contest"
                            date="2023.05.31"
                            publisher="TECH!T"
                            title="[TECH!T] Blockchain School 5th"
                        />
                    </div>
                </div>

                <div>
                    <div className={ styles.category }>
                        <h1 className={ styles.title }>{ t("otherPrograms.recommendedJobOpenings") }</h1>
                        <span className={ styles.description }>{ t("otherPrograms.jobOpeningsDescription") }</span>
                    </div>
                    <div className={ styles.programs }>
                        <JobOpenings
                            image="/assets/photo/photo-coov.png"
                            href="https://www.wanted.co.kr/wd/139624"
                            publisher="Blockchain Labs"
                            title="Blockchain Product Manager"
                        />
                        <JobOpenings
                            image="/assets/photo/photo-bithumb.png"
                            href="https://www.wanted.co.kr/wd/185386"
                            publisher="bithumb"
                            title="[bithumb] Blockchain Techn Developer"
                        />
                        <JobOpenings
                            image="/assets/photo/photo-wemade.png"
                            href="https://www.wanted.co.kr/wd/176540"
                            publisher="WEMADE"
                            title="WemixPlay Blockchain Platform Dev"
                        />
                    </div>
                </div>
            </div>
        </TopBar>
    )
}