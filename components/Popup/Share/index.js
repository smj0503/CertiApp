import LinkButton from "./LinkButton";
import UrlCopy from "./UrlCopy";

import styles from "./Share.module.css";
import IconClose from "@/public/assets/icon-xmark.svg";
import Wanted from "@/public/assets/partners/wanted.svg";
import SaramIn from "@/public/assets/partners/saramin.svg";
import JobKorea from "@/public/assets/partners/jobkorea.svg";
import Remember from "@/public/assets/partners/remember.svg";
import LinkedIn from "@/public/assets/partners/linkedin.svg";

export default function ()
{
    return (
        <div className={ styles.dim }>
            <div className={ styles.popup }>
                <div className={ styles.share }>
                    <span className={ styles.title }>{ "증명서 공유하기" }</span>
                    <p className={ styles.subTitle } dangerouslySetInnerHTML={{ __html: "아래 채용 플랫폼의 이력서에<br/>증명서 링크를 첨부해서 <b>스펙을 손쉽게 증빙하세요!</b>" }}/>
                    <div className={ styles.partners }>
                        <LinkButton href="https://www.wanted.co.kr/cv/list" name="원티드" logo={ <Wanted/> }/>
                        <LinkButton href="https://www.saramin.co.kr/zf_user/resume/resume-manage" name="사람인" logo={ <SaramIn/> }/>
                        <LinkButton href="https://www.jobkorea.co.kr/User/Resume/Write" name="잡코리아" logo={ <JobKorea/> }/>
                        <LinkButton href="https://profile.rememberapp.co.kr" name="리멤버" logo={ <Remember/> }/>
                        <LinkButton href="https://www.linkedin.com" name="링크드인" logo={ <LinkedIn/> }/>
                    </div>
                </div>
                <UrlCopy url={ }/>
            </div>
        </div>
    )
}