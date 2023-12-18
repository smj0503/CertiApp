import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import TopBar from "@/components/TopBar";
import KeywordBadge from "@/components/KeywordBadge";
import Counter from "@/components/Counter";

import styles from "../../../styles/Competencies.module.css";
import IconCompetency from "../../../public/assets/icon-competencies.svg";

export default function ()
{
    const { t } = useTranslation("common");
    const router = useRouter();

    const [badge, setBadge] = useState('');
    const [keywords, setKeywords] = useState([]);
    const [experience, setExperience] = useState('');

    const [totalLength, setLength] = useState(0);

    useEffect(() =>
    {
        const totalLength = keywords.reduce((accumulator, currentValue) => accumulator + currentValue.length, 0);
        setLength(totalLength);
    }, [keywords]);

    const isEmptyValue = (value) =>
    {
        return !value.length;
    };

    const onKeyUp = (e) =>
    {
        const allowedCommand = ['Comma', 'Enter', 'Space', 'NumpadEnter'];
        if (!allowedCommand.includes(e.code)) return;

        if (isEmptyValue(e.target.value.trim()))
        {
            return setBadge('');
        }

        let newHashTag = e.target.value.trim();
        const regExp = /[\{\}\[\]\/?.;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

        if (regExp.test(newHashTag))
        {
            newHashTag = newHashTag.replace(regExp, '');
        }
        if (newHashTag.includes(','))
        {
            newHashTag = newHashTag.split(',').join('');
        }

        if (isEmptyValue(newHashTag))
        {
            return;
        }

        setKeywords((prevKeywords) =>
        {
            return [...new Set([...prevKeywords, newHashTag])];
        });

        setBadge('');
    };

    const onKeyDown = (e) =>
    {
        if (e.code !== 'Enter' && e.code !== 'NumpadEnter')
        {
            return;
        }
        e.preventDefault();

        const regExp = /^[a-z|A-Z|가-힣|ㄱ-ㅎ|ㅏ-ㅣ|0-9| \t|]+$/g;
        if (!regExp.test(e.target.value))
        {
            setBadge('');
        }
    };

    const onChangeKeyword = (e) =>
    {
        setBadge(e.target.value);
    };

    const onChangeExperience = (e) =>
    {
        setExperience(e.target.value);
    };

    const onSubmit = (e) =>
    {
        e.preventDefault();
    };

    const cancel = () =>
    {
        router.back();
    }

    // console.log('keywords : ', keywords);

    return (
        <TopBar hasSession={true}>
            <form className={ styles.container } onSubmit={ onSubmit }>
                <div className={ styles.title }>
                    <IconCompetency/>
                    <h1>{ "Acquired Competencies" }</h1>
                </div>
                <div className={ styles.inputContainer }>

                    <div className={ styles.textField }>
                        <label>{ "Competency Keywords" }</label>

                        <div className={ styles.inputArea }>
                            <div className={ styles.input }>
                                {
                                    keywords.map((keyword, index) =>
                                    {
                                        return <KeywordBadge key={ index } keyword={ keyword }/>;
                                    })
                                }
                                <input
                                    type="text"
                                    placeholder="ex. Communication"
                                    value={ badge }
                                    onChange={ onChangeKeyword }
                                    onKeyUp={ onKeyUp }
                                    onKeyDown={ onKeyDown }
                                    maxLength={30}
                                />
                            </div>
                            <Counter length={ totalLength } maxLength={30}/>
                        </div>

                    </div>

                    <div className={ styles.textField }>
                        <label>{ "My Experience" }</label>
                        <div className={ styles.inputArea }>
                            <div className={ styles.input }>
                                <input
                                    type="text"
                                    placeholder="ex. I developed my ability to collaborate with designers."
                                    onChange={ onChangeExperience }
                                    data-fill={true}
                                    maxLength={300}
                                />
                            </div>
                            <Counter length={ experience.length } maxLength={300}/>
                        </div>
                    </div>
                </div>

                <div className={ styles.buttonGroup }>
                    <button type="button" className={ styles.button } data-action="cancel" data-button-animation={true} onClick={ cancel }>{ "Cancel" }</button>
                    <button type="submit" className={ styles.button } data-action="confirm" data-button-animation={true} disabled={true}>{ "Confirm" }</button>
                </div>
            </form>
        </TopBar>
    )
}
