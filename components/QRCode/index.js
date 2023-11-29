import QRCode from "qrcode.react";

import styles from "./QRCode.module.css";
import Klip from "../../public/assets/logo/logo-klip.svg";
import IconClose from "../../public/assets/icon-close.svg";

export default function ({ url, close })
{
    return (
        <div className={ styles.dim }>
            <div className={ styles.container }>
                <div className={ styles.head }>
                    <span>{ "Sign in" }</span>
                    <button type="button" className={ styles.closeButton } onClick={ close }><IconClose/></button>
                </div>
                <div className={ styles.body }>
                    <Klip/>
                    <div className={ styles.qrContainer }>
                        <QRCode value={ url } size={188}/>
                        <div className={ styles.description }>
                            <span dangerouslySetInnerHTML={{ __html: "Scan the QR code<br/>with your phone" }} className={ styles.guide }/>
                            <span dangerouslySetInnerHTML={{ __html: "After signing on Klip, please wait a moment<br/>for your request to be completed." }} className={ styles.notion }/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}