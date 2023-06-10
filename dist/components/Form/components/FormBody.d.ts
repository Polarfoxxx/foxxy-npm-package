import * as React from "react";
export type TypeFromInputsComponents = {
    value?: string;
    disabled?: boolean;
    placeholder?: string;
    autoFocus?: boolean;
    type: string;
    maxLength?: number;
    required?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
declare const FormBody: React.FC<TypeFromInputsComponents>;
export default FormBody;
