import { useState } from "react";
import * as KlipAPI from "@/apis/klip.signin.api";
import QRCode from "qrcode.react";

import styles from "../styles/Login.module.css";
import Logo from "../public/assets/logo/logo-homepage.svg";
import IconHandShake from "../public/assets/icon-hand-shake.svg";
import IconKlip from "../public/assets/icon-klip.svg";

export default function ()
{
    // const [url, setUrl] = useState('');
    const [qrvalue_auth, setQrvalue_auth] = useState('');
    const [myAddress, setMyAddress] = useState('');

    const onClick = async () =>
    {
        // const { request_key } = await getAddress();
        // setUrl(`https://klipwallet.com/?target=/a2a?request_key=${request_key}`);
        KlipAPI.getAddress(setQrvalue_auth, async (address) => {
            setMyAddress(address);	//사용자의 지갑 주소를 가져온다
        });
    };

    return (
        <div className={ styles.container }>
            <div className={ styles.logo }>
                <Logo/>
            </div>
            <div className={ styles.loginContainer }>
                <IconHandShake/>

                <div className={ styles.sloganContainer }>
                    <h1 className={ styles.slogan } data-color="blue">{ "Record your achievement" }</h1>
                    <h1 className={ styles.slogan }>{ "Remember that moment" }</h1>
                </div>
                <p dangerouslySetInnerHTML={{ __html: "you can easily and conveniently manage<br/>certificates such as diploma or awards" }} className={ styles. description }/>
                {
                    qrvalue_auth ? (
                        <div style={{ marginTop: 48 }}><QRCode value={ qrvalue_auth } size={188}/></div>
                    ): (
                        <button type="button" className={ styles.loginButton } onClick={ onClick }>
                            <IconKlip/>
                            <label className={ styles.buttonLabel }>{ "Sign in with Klip" }</label>
                        </button>
                    )
                }
            </div>
        </div>
    )
}