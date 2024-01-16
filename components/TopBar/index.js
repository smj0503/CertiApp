import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import LocalStorage from "@/common/localstorage.manager";

import styles from "./TopBar.module.css";
import Logo from "../../public/assets/logo/logo-top-bar.svg";
import IconLogout from "../../public/assets/icon-logout.svg";

export default function ({ hasSession = false, children })
{
    const { t } = useTranslation("common");
    const router = useRouter();
    const walletAddress = LocalStorage.shared.getItem('walletAddress');

    const Logout = async () =>
    {
        LocalStorage.shared.removeItem('walletAddress');
        await router.replace('/');
    };

    return (
        <div className={ styles.backgroundContainer }>
            <div className={ styles.topBar }>
                <div className={ styles.menus }>
                    <Logo/>
                    {
                        hasSession && (
                            <div>
                                <Link data-button-animation={true} href={ `/${walletAddress}` } className={ styles.linkbutton } data-selected={ !router.asPath.includes("programs") }>{ t("topBar.myCertificate") }</Link>
                                {/*<Link data-button-animation={true} href={ `/${walletAddress}/programs` } className={ styles.linkbutton } data-selected={ router.asPath.includes("programs") }>{ t("topBar.otherPrograms") }</Link>*/}
                            </div>
                        )
                    }
                </div>
                {
                    hasSession && (
                        <button data-button-animation={true} type="button" className={ styles.logout } onClick={ Logout }>
                            { t("topBar.logout") }<IconLogout/>
                        </button>
                    )
                }
            </div>
            <main className={ styles.body }>
                { children }
            </main>
        </div>
    )
}
