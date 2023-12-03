import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";
import { getAddress } from "@/apis/klip.signin.api";
import { asyncEffect } from "@/common/utils";

import QRCode from "@/components/QRCode";

import styles from "../styles/Login.module.css";
import Logo from "../public/assets/logo/logo-signin.svg";
import IconHandShake from "../public/assets/icon-hand-shake.svg";
import IconKlip from "../public/assets/icon-klip.svg";

export default function ()
{
    const { t } = useTranslation("common");
    const router = useRouter();

    const [url, setUrl] = useState('');
    const [address, setAddress] = useState('');
    const [status, setStatus] = useState('');

    const [open, setOpen] = useState(false);

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

        setOpen(true);
    };

    const onClose = () =>
    {
        setOpen(false);
    };

    return (
        <div className={ styles.container }>
            <div className={ styles.logo }>
                <Logo/>
            </div>
            <div className={ styles.loginContainer }>
                <IconHandShake/>
                <div className={ styles.sloganContainer }>
                    <h1 className={ styles.slogan } data-color="blue">{ t("signIn.recordYourAchievement") }</h1>
                    <h1 className={ styles.slogan }>{ t("signIn.rememberThatMoment") }</h1>
                </div>
                <p dangerouslySetInnerHTML={{ __html: t("signIn.opengraph") }} className={ styles. description }/>
                <button type="button" className={ styles.loginButton } onClick={ onClick }>
                    <IconKlip/>
                    <label className={ styles.buttonLabel }>{ t("signIn.signInWithKlip") }</label>
                </button>
                {
                    url && open && <QRCode url={ url } close={ onClose }/>
                }
            </div>
        </div>
    )
}