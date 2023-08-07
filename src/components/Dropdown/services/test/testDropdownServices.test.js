import servicesShowAndHide_dropdown from "../showAndHide.services";
import { masterStyle_forDropdown } from "../../style";
import servicesChangeVariantDropDwn from "../changeVariant.services";
import { variantStyle_forDropdown } from "../../style";


describe("test dropDown services", () => {

    test("testing show/hide", () => {
        const show = true;
        const services = servicesShowAndHide_dropdown.showAndHide_dropdown({ show });

        expect(services).toEqual({
            ...masterStyle_forDropdown.showAndHideDropdown.dropdown_Show
        });
    });

    test("testing change variant", () => {
        const variant_drop = "dark";
        const services = servicesChangeVariantDropDwn.changeVariantDropDwn(variant_drop)

        expect(services).toEqual({
            ...variantStyle_forDropdown.dropDarkVariant
        });
    });

    test("testing undefined variant", () => {
        const variant_drop = "";
        const services = servicesChangeVariantDropDwn.changeVariantDropDwn(variant_drop)

        expect(services).toEqual({
            ...variantStyle_forDropdown.dropDefVariant
        });
    });
})