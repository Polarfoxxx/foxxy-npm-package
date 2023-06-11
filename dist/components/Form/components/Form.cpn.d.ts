import * as React from "react";
import { TypeFormIntrinsicAttributes } from "../types";
import { TypeInputsIntrinsicAttributes } from "../types";
type MasterAttributesFromFormAndInputs = TypeFormIntrinsicAttributes & TypeInputsIntrinsicAttributes;
declare const FormComponent: React.FC<MasterAttributesFromFormAndInputs>;
export default FormComponent;
