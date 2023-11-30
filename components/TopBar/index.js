import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./TopBar.module.css";
import Logo from "../../public/assets/logo/logo-top-bar.svg";
import IconLogout from "../../public/assets/icon-logout.svg";

export default function ({ hasSession = false, children })
{
    const router = useRouter();
    console.log(router.asPath);

    return (
        <div className={ styles.backgroundContainer }>
            <div className={ styles.topBar }>
                <div className={ styles.menus }>
                    <Logo/>
                    {
                        hasSession && (
                            <div>
                                <Link href="/pages/archive" className={ styles.linkbutton } data-selected={ router.asPath === "/certificate" }>{ "MY CERTIFICATE" }</Link>
                                <Link href="/programs" className={ styles.linkbutton } data-selected={ router.asPath === "/programs" }>{ "OTHER PROGRAMS" }</Link>
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