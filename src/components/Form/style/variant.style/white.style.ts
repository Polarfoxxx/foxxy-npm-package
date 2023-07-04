import { TypeStyleForForm } from "../../types";
import { masterStyleForForm } from "../master.style/master.style";

export const whiteStyleForForm: TypeStyleForForm = {
    form: {
        ...masterStyleForForm.form,
        backgroundColor: "rgb(248, 246, 244)",
    },
    formBody: {
        ...masterStyleForForm.formBody,
    },
    formHeader: {
        ...masterStyleForForm.formHeader,
        backgroundColor: "rgb(227, 244, 244)",

        color: "black",
    },
    formLabel: {
        ...masterStyleForForm.formLabel,
        color: "black",
    },
    formInputs: {
        ...masterStyleForForm.formInputs,
        backgroundColor: "white",
        border: "1px solid rgb(82, 109, 130)",
    },
}
