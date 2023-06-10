import { TypeStyleFromForm } from "../types"

export const funnyStyleFromForm: TypeStyleFromForm = {
    form: {
        width: "28vw",
        height: "6vw",
        minWidth: "350px",
        minHeight: "100px",
        backgroundColor: "rgb(245, 245, 245)",
        border: "1px solid rgb(221, 230, 237)",
        borderRadius: "1vw",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
    },
    formDivs: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    formHeader: {
        width: "100%",
        height: "26%",
        backgroundColor: "rgb(157, 178, 191)"
    },
    formInputsBlock: {
        width: "100%",
        height: "100%",
    },
    formInputs: {
        width: "80%",
        height: "70%",
        borderRadius: "7px",
        border: "1px solid rgb(82, 109, 130)",
        padding: "0 8px"
    },
    formFooter: {
        width: "100%",
        height: "70%",
        padding: "4px",
    },
}
