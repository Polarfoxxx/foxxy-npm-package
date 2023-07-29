import type { Meta, StoryObj } from '@storybook/react';
import { ModalComponent } from '../components/Modal/components/Modal.master';
import { FormComponent } from '../components/Form/components/Form.master';
import { ButtonComponent } from '../components/Button/components/Button.master';
declare const meta: Meta;
export default meta;
type Story = StoryObj<typeof FormComponent.Form> | StoryObj<typeof ButtonComponent.Button> | StoryObj<typeof ModalComponent.Modal>;
export declare const variant_modals: Story;
