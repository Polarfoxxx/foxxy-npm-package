import { TypeStyleForForm } from "../../types";
import { masterStyleForForm } from "../master.style/master.style";


export const funnyStyleForForm: TypeStyleForForm = {
    form: {
        backgroundColor: "rgb(56, 229, 77)",
        ...masterStyleForForm.form
    },
    formBody: {
        ...masterStyleForForm.formBody
    },
    formHeader: {
        ...masterStyleForForm.formHeader,
        backgroundColor: "rgb(69, 69, 69)",
        color: "white",
    },
    formLabel: {
        ...masterStyleForForm.formLabel,
        color: "black",
    },
    formInputs: {
        ...masterStyleForForm.formInputs,
        backgroundColor: "rgb(227, 244, 244)",
        border: "1px solid rgb(82, 109, 130)",
    },
}