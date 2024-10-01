import React from "react";
import { Type_for_formLeftSideInfo } from "../types";
import "@components/global_root.css";
import "../style/form_root_style.css";
import "../style/primaryStyle/masterPrimaryStyle.css";
import "../style/secondaryStyle/masterSecondaryStyle.css";
import "../style/alertStyle/masterAlertStyle.css";
import "../style/successStyle/masterSuccessStyle.css";
import "../style/darkStyle/masterDarkStyle.css";
import "../style/nightStyle/masterNightStyle.css";


function FormLeftSideInfo({
    customStyle,
    selectStyleType,
    leftSideInfoText,
}: Type_for_formLeftSideInfo): JSX.Element {

    return (
        <div
            style={{ ...customStyle }}
            className={`${selectStyleType} leftSideInfo`}>
            <p>{leftSideInfoText}</p>
        </div>
    );
};

export default FormLeftSideInfo;