import { TypeReturnStyleForElement } from './types';
import { TypeForStyleFunction } from './types';
declare const servicesChangeStyleForButtons: {
    changerStyleForButton: typeof changerStyleForButton;
};
export default servicesChangeStyleForButtons;
declare function changerStyleForButton({ variant, border, round, lg, sm }: TypeForStyleFunction): TypeReturnStyleForElement;
