import React from "react";
import { PropsForDropBoxComponents ,ChildProps_child_dropdownItems} from "../types";
import "@components/global_root.css";
import "../style/dropDown_root_style.css";
import "../style/dropDownContent/primaryDropDownContent.css";
import "../style/dropDownContent/secondaryDropDownContent.css";
import "../style/dropDownContent/alertDropDownContent.css";
import "../style/dropDownContent/successDropDownContent.css";
import "../style/dropDownContent/nightDropDownContent.css";
import "../style/dropDownContent/darkDropDownContent.css";

function DropdownContent({
    children,
    selectStyleType,
    show ,
    custom_showAndHidden_time,
    
}: PropsForDropBoxComponents): JSX.Element {
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const contentElement = contentRef.current;
        if (contentElement) {
            if (show) {
                contentElement.style.maxHeight = `${contentElement.scrollHeight}px`;
                contentElement.style.transition = `${custom_showAndHidden_time}s`;
            } else {
                contentElement.style.maxHeight = "0px";
                contentElement.style.transition = `${custom_showAndHidden_time}s`;
            };
        };
    }, [show]);

    return (
        <div
            ref={contentRef}
            className={`${selectStyleType} dropContent`}>
            {
                React.Children.map(children, (child: React.ReactElement<ChildProps_child_dropdownItems>) => {
                    return React.cloneElement(child, { selectStyleType });
                })
            }
        </div>
    )
};

export default DropdownContent;
