import servicesChangeVariantForFrom from "../services.changeVariant";
import { allVariantForForm } from "../../style";

describe("test form component", () => {

    test("testing undefindent variants", () => {
        const variant = undefined;
        const CSS_Variant = allVariantForForm.defaultStyleForForm;
        const services = servicesChangeVariantForFrom.changerVariantForForm({ variant });

        expect(services).toEqual(
            expect.objectContaining(CSS_Variant)
        );
    });


    test("testing white variants", () => {
        const variant = "white";
        const CSS_Variant = allVariantForForm.whiteStyleForForm;
        const services = servicesChangeVariantForFrom.changerVariantForForm({ variant });

        expect(services).toEqual(
            expect.objectContaining(CSS_Variant)
        );
    });

})