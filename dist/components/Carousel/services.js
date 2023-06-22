import { defaultStyleforCarousel } from "./style/defaultVariant.style";
import { oceanStyleforCarousel } from "./style/oceanVariant.style";
import { darkStyleforCarousel } from "./style/darkVariant.style";
const servicesChangeVariantForCarousel = {
    changeVariantForCarousel
};
export default servicesChangeVariantForCarousel;
function changeVariantForCarousel({ variant }) {
    /* podmienka meniaca variantu */
    if (variant === "ocean") {
        return oceanStyleforCarousel;
    }
    else if (variant === "dark") {
        return darkStyleforCarousel;
    }
    else {
        return defaultStyleforCarousel;
    }
}
