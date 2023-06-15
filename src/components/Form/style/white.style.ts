import { TypeStyleFromForm } from "../types"

export const whiteStyleFromForm: TypeStyleFromForm = {
    form: {
        width: "auto",
        height: "auto",
        minWidth: "350px",
        backgroundColor: "rgb(227, 244, 244)",
        border: "1px solid rgb(221, 230, 237)",
        borderRadius: "1vw",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        padding: "0 0 10px 0"
    },
    formHeader: {
        width: "100%",
        height: "30px",
        backgroundColor: "white",
        color: "black",
        padding: "0 10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    formLabel: {
        color: "black",
        fontSize: "13px",
        width: "80%",
        display: "flex"
    },
    formBody: {
        width: "100%",
        height: "50%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    formInputs: {
        width: "80%",
        height: "25px",
        borderRadius: "7px",
        border: "1px solid rgb(82, 109, 130)",
        padding: "0 8px",
        backgroundColor: "rgb(227, 244, 244)",
        margin: "8px"
    },
}
