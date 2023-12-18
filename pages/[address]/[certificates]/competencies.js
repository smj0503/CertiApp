import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

import TopBar from "@/components/TopBar";

import styles from "../../../styles/Competencies.module.css";
import IconCompetency from "../../../public/assets/icon-competencies.svg";

export default function ()
{
    const { t } = useTranslation("common");
    const router = useRouter();

    return (
        <TopBar hasSession={true}>
            <div className={ styles.container }>
                <div className={ styles.title }>
                    <IconCompetency/>
                    <h1>{ "Acquired Competencies" }</h1>
                </div>

                <div className={ styles.textField }>
                    <label>{ "Competency Keywords" }</label>
                    <input placeholder="ex. Communication"/>
                </div>
                <div className={ styles.textField }>
                    <label>{ "My Experience" }</label>
                    <input placeholder="ex. I developed my ability to collaborate with designers."/>
                </div>
            </div>
        </TopBar>
    )
}
