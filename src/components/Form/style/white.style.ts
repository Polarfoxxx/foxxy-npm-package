import { TypeStyleFromForm } from "../types"

export const whiteStyleFromForm: TypeStyleFromForm = {
    form: {
        backgroundColor: "rgb(227, 244, 244)",
    },
    formBody: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    formHeader: {
        backgroundColor: "white",
        color: "black",
        width: "100%",
        height: "30px",
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
    formInputs: {
        backgroundColor: "rgb(227, 244, 244)",
        width: "80%",
        height: "25px",
        borderRadius: "7px",
        border: "1px solid rgb(82, 109, 130)",
        padding: "0 8px",
        margin: "8px"
    },
}
