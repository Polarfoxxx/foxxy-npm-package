import servicesChangeVariantForModal from "../services.changeVariant";
import { allvariantsForModal } from "../../style";

describe("test modal component", () => {

    test("testing undefindent variants", () => {
        const variant_mdl = undefined;
        const CSS_Variant = allvariantsForModal.defaultStyleForModal
        const services = servicesChangeVariantForModal.changeVariantForModal({ variant_mdl });


        expect(services).toEqual(
            expect.objectContaining(CSS_Variant)
        );
    });


    test("testing empty text variants", () => {
        const variant_mdl = "";
        const CSS_Variant = allvariantsForModal.defaultStyleForModal
        const services = servicesChangeVariantForModal.changeVariantForModal({ variant_mdl });


        expect(services).toEqual(
            expect.objectContaining(CSS_Variant)
        );
    });

    test("testing white variants", () => {
        const variant_mdl = "white";
        const CSS_Variant = allvariantsForModal.whiteStyleForModal
        const services = servicesChangeVariantForModal.changeVariantForModal({ variant_mdl });


        expect(services).toEqual(
            expect.objectContaining(CSS_Variant)
        );
    });
});
