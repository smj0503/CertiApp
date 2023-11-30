import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./TopBar.module.css";
import Logo from "../../public/assets/logo/logo-top-bar.svg";
import IconLogout from "../../public/assets/icon-logout.svg";

export default function ({ hasSession = false, children })
{
    const router = useRouter();
    const href = router.asPath.includes("my-certificate") ? router.asPath.replace('my-certificate', 'programs') : router.asPath.replace('programs', 'my-certificate');

    return (
        <div className={ styles.backgroundContainer }>
            <div className={ styles.topBar }>
                <div className={ styles.menus }>
                    <Logo/>
                    {
                        hasSession && (
                            <div>
                                <Link href={ href } className={ styles.linkbutton } data-selected={ router.asPath.includes("my-certificate") }>{ "MY CERTIFICATE" }</Link>
                                <Link href={ href } className={ styles.linkbutton } data-selected={ router.asPath.includes("programs") }>{ "OTHER PROGRAMS" }</Link>
                            </div>
                        )
                    }
                </div>
                {
                    hasSession && (
                        <button type="button" className={ styles.logout }>
                            { "Log out" }<IconLogout/>
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