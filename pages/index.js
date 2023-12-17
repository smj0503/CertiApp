import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";
import { getAddress } from "@/apis/klip.signin.api";
import { asyncEffect } from "@/common/utils";

import QRCode from "@/components/QRCode";

import styles from "../styles/Login.module.css";
import Logo from "../public/assets/logo/logo-signin.svg";
import IconCheck from "../public/assets/icon-check.svg";
import IconKlip from "../public/assets/icon-klip.svg";

export default function ()
{
    const { t } = useTranslation("common");
    const router = useRouter();

    const [url, setUrl] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');

    const [isOpened, setIsOpened] = useState(false);

    asyncEffect(async () =>
    {
        console.log('address : ', address);
        console.log('status : ', status);

        if(address && status === "completed")
        {
            await router.push({ pathname: `/${address}` });
        }
    }, [address, status]);

    const onClick = async () =>
    {
        getAddress(setUrl, async (address, status) =>
        {
            setAddress(address);
            setStatus(status);
        });

        setIsOpened(true);
    };

    const close = () =>
    {
        setIsOpened(false);
    };

    return (
        <div className={ styles.container }>
            <div className={ styles.loginContainer }>
                <Logo/>
                <div className={ styles.slogan }>
                    <h1 data-color="blue">{ t("signIn.recordYourAchievement") }</h1>
                    <h1>{ t("signIn.rememberThatMoment") }</h1>
                </div>
                <IconCheck/>
                <p dangerouslySetInnerHTML={{ __html: t("signIn.opengraph") }} className={ styles.description }/>
                <button data-button-animation={true} type="button" className={ styles.loginButton } onClick={ onClick }>
                    <IconKlip/>
                    <label className={ styles.buttonTitle }>{ t("signIn.signInWithKlip") }</label>
                </button>
            </div>
            {/*{*/}
            {/*    url && isOpened && <QRCode url={ url } close={ close } isOpened={ isOpened }/>*/}
            {/*}*/}
            <QRCode url={ url } close={ close } isOpened={ isOpened }/>
        </div>
    )
}
