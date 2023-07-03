import { TypeStyleForForm } from "../../types";
import { masterStyleForForm } from "../master.style/master.style";

 export const darkStyleForForm: TypeStyleForForm = {
  form: {
    backgroundColor: "rgb(39, 55, 77)",
    ...masterStyleForForm.form
  },
  formBody: {
    ...masterStyleForForm.formBody
  },
  formHeader: {
    ...masterStyleForForm.formHeader,
    backgroundColor: "rgb(10, 38, 71)",
    color: "white",
  },
  formLabel: {
    ...masterStyleForForm.formLabel,
    color: "rgb(194, 222, 220)",
  },
  formInputs: {
    ...masterStyleForForm.formInputs,
    backgroundColor: "rgb(227, 244, 244)",
    border: "1px solid rgb(82, 109, 130)",
    padding: "0 8px",
    margin: "8px"
  },
}


