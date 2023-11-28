import styles from "../styles/Login.module.css";
import Logo from "../public/assets/logo/logo-homepage.svg";
import IconHandShake from "../public/assets/icon-hand-shake.svg";
import IconKlip from "../public/assets/icon-klip.svg";

export default function ()
{
    const onClick = () =>
    {
        console.log('sign in');
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
                <button type="button" className={ styles.loginButton } onClick={ onClick }>
                    <IconKlip/>
                    <label className={ styles.buttonLabel }>{ "Sign in with Klip" }</label>
                </button>
            </div>
        </div>
    )
}