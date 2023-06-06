import { TypeReturnStyleForElement } from './types';
import { TypeForStyleFunction } from './types';
declare const servicesChangeStyle: {
    changerStyle: typeof changerStyle;
};
export default servicesChangeStyle;
declare function changerStyle({ variant, border, radius, lg, sm }: TypeForStyleFunction): TypeReturnStyleForElement;
