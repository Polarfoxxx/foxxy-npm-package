import { TypeStyleForForm } from "../../types";
import { masterStyleForForm } from "../master.style/master.style";

export const defaultStyleForForm: TypeStyleForForm = {
    form: {
        backgroundColor: "rgb(210, 233, 233)",
        ...masterStyleForForm.form
    },
    formBody: {
        ...masterStyleForForm.formBody
    },
    formHeader: {
        ...masterStyleForForm.formHeader,
        backgroundColor: "rgb(17, 106, 123)",
        color: "white",
    },
    formLabel: {
        ...masterStyleForForm.formLabel,
        color: "black",
    },
    formInputs: {
        ...masterStyleForForm.formInputs,
        borderRadius: "7px",
        border: "1px solid rgb(82, 109, 130)",
    },
}