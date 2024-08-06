
import React from "react";
import { PropsForDropBoxComponents } from "../types";

const DropdownBox: React.FC<PropsForDropBoxComponents> = ({ children, variant_CSS }): JSX.Element => {

    return (
        <div style={{
        
        }}>
            { 
            React.Children.map(children, (child: React.ReactElement<any>) => {
                    return React.cloneElement(child, { variant_CSS });
                })
                }
        </div>
    )
};

export default DropdownBox
