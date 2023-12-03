import useTranslation from "next-translate/useTranslation";
import QRCode from "qrcode.react";

import styles from "./QRCode.module.css";
import Klip from "../../public/assets/logo/logo-klip.svg";
import IconClose from "../../public/assets/icon-close.svg";

export default function ({ url, close })
{
    const { t } = useTranslation("common");

    return (
        <div className={ styles.dim }>
            <div className={ styles.container }>
                <div className={ styles.head }>
                    <span>{ t("signIn.signIn") }</span>
                    <button type="button" data-button-animation={true} className={ styles.closeButton } onClick={ close }><IconClose/></button>
                </div>
                <div className={ styles.body }>
                    <Klip/>
                    <div className={ styles.qrContainer }>
                        <QRCode value={ url } size={188}/>
                        <div className={ styles.description }>
                            <span dangerouslySetInnerHTML={{ __html: t("signIn.scanQRCode") }} className={ styles.guide }/>
                            <span dangerouslySetInnerHTML={{ __html: t("signIn.pleaseWait") }} className={ styles.notion }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}