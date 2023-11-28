import Link from "next/link";

import styles from "./TopBar.module.css";
import Logo from "../../public/assets/logo/logo-dashboard.svg";
import IconLogout from "../../public/assets/icon-logout.svg";

export default function ({ children })
{
    return (
        <div className={ styles.backgroundContainer }>
            <div className={ styles.topBar }>
                <div className={ styles.menus }>
                    <Logo/>
                    <div>
                        <Link href="/certificates" className={ styles.linkbutton }>{ "MY CERTIFICATE" }</Link>
                        <Link href="/programs" className={ styles.linkbutton }>{ "OTHER PROGRAMS" }</Link>
                    </div>
                </div>

                <button type="button" className={ styles.logout }>
                    { "Log out" }<IconLogout/>
                </button>
            </div>

            <main className={ styles.body }>
                { children }
            </main>
        </div>
    )
}