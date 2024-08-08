
import React from "react";
import { PropsForDropBoxComponents } from "../types";

function DropdopwnContent({
    children,
    selectStyleType
}: PropsForDropBoxComponents): JSX.Element {

    return (
        <div
            className={`${selectStyleType} dropContent`}>
            {
                React.Children.map(children, (child: React.ReactElement<any>) => {
                    return React.cloneElement(child, { selectStyleType });
                })
            }
        </div>
    )
};

export default DropdopwnContent
