declare const servicesChangeStyle: {
    changerStyle: typeof changerStyle;
};
export default servicesChangeStyle;
type TypeService = {
    defStyle: {};
    styles: {};
};
declare function changerStyle(variant?: any, border?: boolean): TypeService;
