import React, { SetStateAction } from "react";
import OffCanvasHeader from "./OffCanvasHeader";
import OffCanvasBody from "./OffCanvasBody";
import { CSSProperties } from "react";

type PropsForOffCanvasComponents = {
    children: JSX.Element | JSX.Element[],
    show: boolean,
    setShow: React.Dispatch<SetStateAction<boolean>>
};
type TypeForShowAndHideStyle = {
    styleForBox: CSSProperties,
    styleForScreen: CSSProperties
};


const styleMasterForOffCanvasComponent: TypeForShowAndHideStyle = {
    styleForBox: {
        width: "30vw",
        height: "100vh",
        position: "absolute",
        backgroundColor: "orange",
        transition: "1s"
    },
    styleForScreen: {
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        backgroundColor: "rgba(66, 66, 66, 0.658)"
    }
}


const styleForOffCanvasComponent_hide: TypeForShowAndHideStyle = {
    styleForBox: {
        left: "-100%",
        transition: "1s"

    },
    styleForScreen: {
        display: "none"
    }
}

const styleForOffCanvasComponent_show: TypeForShowAndHideStyle = {
    styleForBox: {
        left: "0",
        transition: "1s"

    },
    styleForScreen: {
        display: "block"
    }
}




const OffCanvas: React.FC<PropsForOffCanvasComponents> = ({ children, show, setShow }): JSX.Element => {
    const [displayOffCanvas, setDisplayOffCanvas] = React.useState<TypeForShowAndHideStyle>(styleForOffCanvasComponent_hide)

    /* podmienka zatvarania a ovarania offCanvas */
    React.useEffect(() => {
        if (show) {
            setDisplayOffCanvas(styleForOffCanvasComponent_show)
        } else { setDisplayOffCanvas(styleForOffCanvasComponent_hide) }
    }, [show]);

    /* zatvaranie offCanvas */
    const handleClickHideBlock = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLDivElement;
        const eventId = target.id;
        eventId === "screenBlok" && setShow(false)
    };

    return (
        <div
            id="screenBlok"
            onClick={handleClickHideBlock}
            style={{ ...styleMasterForOffCanvasComponent.styleForScreen, ...displayOffCanvas.styleForScreen }} >
            <div
                id="offCanvasBlock"
                style={{ ...styleMasterForOffCanvasComponent.styleForBox, ...displayOffCanvas.styleForBox }}>
                {children}
            </div>
        </div>

    );
};



export const OffCanvasComponent = {
    OffCanvas,
    OffCanvasHeader,
    OffCanvasBody
};