import { TypeStyleForForm } from "../../types"


export const masterStyleForForm: TypeStyleForForm = {
    form: {
        width: "30vw",
        height: "auto",
        minWidth: "350px",
        border: "1px solid rgb(221, 230, 237)",
        borderRadius: "1vw",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        padding: "0 0 10px 0"
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
        width: "100%",
        height: "30px",
        padding: "0 10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    formLabel: {
        fontSize: "15px",
        width: "80%",
        display: "flex"
    },
    formInputs: {
        width: "80%",
        height: "25px",
        borderRadius: "7px",
        padding: "0 8px",
        margin: "8px"
    },
}