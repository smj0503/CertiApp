import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./TopBar.module.css";
import Logo from "../../public/assets/logo/logo-top-bar.svg";
import IconLogout from "../../public/assets/icon-logout.svg";

export default function ({ hasSession = false, children })
{
    const { t } = useTranslation("common");
    const router = useRouter();

    const href = router.asPath.includes("programs") ? router.asPath.replace('programs', '') : `${router.asPath}/programs`;

    return (
        <div className={ styles.backgroundContainer }>
            <div className={ styles.topBar }>
                <div className={ styles.menus }>
                    <Logo/>
                    {
                        hasSession && (
                            <div>
                                <Link href={ href } className={ styles.linkbutton } data-selected={ !router.asPath.includes("programs") }>{ t("topBar.myCertificate") }</Link>
                                <Link href={ href } className={ styles.linkbutton } data-selected={ router.asPath.includes("programs") }>{ t("topBar.otherPrograms") }</Link>
                            </div>
                        )
                    }
                </div>
                {
                    hasSession && (
                        <button type="button" className={ styles.logout }>
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