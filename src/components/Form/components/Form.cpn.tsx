import * as React from "react";
import { FormHTMLAttributes } from "react"
import FormHeader from "./FormHeader";
import { CSSProperties } from "react";

export interface TypeFormIntrinsicAttributes extends FormHTMLAttributes<HTMLFormElement> {
    submit?: boolean,
    children?: React.ReactNode,
    formName?: string,
    type: string
}


const Form: React.FC<TypeFormIntrinsicAttributes> = ({ submit, children, formName, type }): JSX.Element => {



    const formStyle: CSSProperties = {
        width: "25vw",
        height: "6vw",
        minWidth: "350px",
        minHeight: "100px",
        backgroundColor: "rgb(245, 245, 245)",
        border: "1px solid rgb(221, 230, 237)",
        borderRadius: "2vw",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
    }
    const styleFromDivs: CSSProperties = {
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    const styleHeader: CSSProperties = {
        width: "100%",
        height: "33%",
        backgroundColor: "rgb(157, 178, 191)"

    }
    const styleFooter: CSSProperties = {
        width: "100%",
        height: "33%",
        padding: "5px"
    }
    const styleInput: CSSProperties = {
        width: "80%",
        height: "60%",
        borderRadius: "7px",
        border: "1px solid rgb(82, 109, 130)",
        padding: "0 8px"
      }

    return (
        <>
            <form
                action=""
                style={formStyle}>
                <div style={{ ...styleFromDivs, ...styleHeader }}>
                    <FormHeader formName={formName} />
                </div>
                <div style={styleFromDivs}>
                    <input 
                    style={styleInput}
                    type="text" />
                </div>
                <div style={{ ...styleFromDivs, ...styleFooter }}>
                    {children}
                </div>
            </form>
        </>
    )
}


export default Form