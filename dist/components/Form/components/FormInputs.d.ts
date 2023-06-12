import * as React from "react";
import { TypeInputsIntrinsicAttributes } from "../types";
import { TypeLabelIntrinsicAttributes } from "../types";
type TypeMasterFromInputsAndLabel = TypeInputsIntrinsicAttributes & TypeLabelIntrinsicAttributes;
declare const FormInputs: React.FC<TypeMasterFromInputsAndLabel>;
export default FormInputs;
