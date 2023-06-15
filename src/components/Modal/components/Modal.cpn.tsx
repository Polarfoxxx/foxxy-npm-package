import React from "react";
import { masterStyleFromModal } from "../style/master.style";

type Props = {
    variant?: "default" | "white" | "dark",
    children: JSX.Element | JSX.Element[]
}

const Modal: React.FC<Props> = ({ variant, children }): JSX.Element => {




    return (
        <>
            <div style={{...masterStyleFromModal.fullScreen}}>
                <div style={{...masterStyleFromModal.formBlock}}>
                    {children}
                </div>
            </div>
        </>
    )
}


export const ModalComponent = {
    Modal
}