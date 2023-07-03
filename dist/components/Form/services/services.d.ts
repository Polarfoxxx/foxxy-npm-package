import { TypeForFormServices } from "../types";
import { TypeStyleForForm } from "../types";
declare const servicesChangeStyleForFrom: {
    changerStyleForForm: typeof changerStyleForForm;
};
export default servicesChangeStyleForFrom;
declare function changerStyleForForm({ variant }: TypeForFormServices): TypeStyleForForm;
