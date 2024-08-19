import React, { useRef, useEffect } from "react";
import { PropsForDropBoxComponents } from "../types";
import "../style/dropDownContent/primaryDropDownContent.css";

function DropdownContent({
    children,
    selectStyleType,
    show
}: PropsForDropBoxComponents): JSX.Element {
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const contentElement = contentRef.current;

        if (contentElement) {
            if (show) {
                // Dynamicky nastaviť maxHeight na aktuálnu výšku obsahu
                contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;
            } else {
                // Nastaviť maxHeight na 0 pri skrytí
                contentElement.style.maxHeight = "0";
            }
        }
    }, [show]);

    return (
        <div
            ref={contentRef}
            className={`${selectStyleType} dropContent ${show ? "show" : "hidden"}`}>
            {
                React.Children.map(children, (child: React.ReactElement<any>) => {
                    return React.cloneElement(child, { selectStyleType });
                })
            }
        </div>
    )
};

export default DropdownContent;
