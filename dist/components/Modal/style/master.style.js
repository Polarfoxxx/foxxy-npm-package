export const visibleStyleFromModal = {
    fullScreen: {
        backgroundColor: "rgba(0, 0, 0, 0.829)",
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        top: "0"
    },
    formBlock: {
        width: "30vw",
        height: "auto",
        position: "absolute",
        top: "0",
        left: "50%",
        transform: "translate(-50%)",
        transition: "0.6s"
    }
};
export const hideStyleFromModal = {
    fullScreen: {
        display: "block"
    },
    formBlock: {
        width: "30vw",
        height: "auto",
        position: "absolute",
        top: "-100%",
        left: "50%",
        transform: "translate(-50%)",
        transition: "0.6s"
    }
};
