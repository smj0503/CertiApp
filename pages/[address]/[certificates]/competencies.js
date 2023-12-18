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
            <form className={ styles.container }>
                <div className={ styles.title }>
                    <IconCompetency/>
                    <h1>{ "Acquired Competencies" }</h1>
                </div>

                <div className={ styles.inputContainer }>
                    <div className={ styles.textField }>
                        <label>{ "Competency Keywords" }</label>
                        <div className={ styles.inputArea }>
                            <input placeholder="ex. Communication"/>
                            <span className={ styles.counter }>{ "0/30" }</span>
                        </div>
                    </div>
                    <div className={ styles.textField }>
                        <label>{ "My Experience" }</label>
                        <div className={ styles.inputArea }>
                            <input placeholder="ex. I developed my ability to collaborate with designers."/>
                            <span className={ styles.counter }>{ "0/300" }</span>
                        </div>
                    </div>
                </div>

                <div className={ styles.buttonGroup }>
                    <button type="button" className={ styles.button } data-action="cancel" data-button-animation={true}>{ "Cancel" }</button>
                    <button type="submit" className={ styles.button } data-action="confirm" data-button-animation={true}>{ "Confirm" }</button>
                </div>
            </form>
        </TopBar>
    )
}
