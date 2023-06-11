import * as React from "react";
import { TypeFormIntrinsicAttributes } from "../types";
import { TypeInputsIntrinsicAttributes } from "../types";
type MasterAttributesFromFormAndInputs = TypeFormIntrinsicAttributes & TypeInputsIntrinsicAttributes;
declare const Form: React.FC<MasterAttributesFromFormAndInputs>;
export default Form;
