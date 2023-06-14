import React from "react";

type Props = {
    variant: "default" | "white" | "dark",
    children: React.ReactNode
}

const Modal: React.FC<Props> = ({ variant, children }): JSX.Element => {


    
    return (
        <>
            <div>
                {children}
            </div>
        </>
    )
}


export const ModalComponent = {
    Modal
}