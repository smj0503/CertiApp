import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { useState } from "react";

import TopBar from "@/components/TopBar";
import SortButton from "@/components/SortButton";
import Collection from "@/components/Collection";

import styles from "../../../styles/MyCertificate.module.css";
import EmptyContainer from "@/components/EmptyContainer";

export default function ()
{
    const { t } = useTranslation("common");
    const router = useRouter();

    return (
        <TopBar hasSession={false}>
            <div className={ styles.container }>
                <EmptyContainer hasSession={false}/>
            </div>
        </TopBar>
    );
}
