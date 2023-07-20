
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalComponent } from '../components/Modal/components/Modal.master';
import { FormComponent } from '../components/Form/components/Form.master';
import { ButtonComponent } from '../components/Button/components/Button.master';


const meta: Meta = {
    title: 'Example/Modal',
    component: ModalComponent.Modal,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            description: 'you can choose a color variant for the component Modal',
            options: ['default', 'dark','white'],
            control: { type: 'radio' },
        },
    }
}

export default meta;


/* spojenie typeOF componentov*/
type Story = StoryObj<typeof FormComponent.Form> | StoryObj<typeof ButtonComponent.Button>;

export const variant_default: Story = (args) => {
    const { buttonCount = 1, ...rest } = args;
    const buttons = Array.from({ length: buttonCount }, (_, index) => (
        <ButtonComponent.Button {...args} key={`button${index}`} />
    ));
    return (
        <FormComponent.Form variant='default' {...rest}>
            <FormComponent.FormHeader />
            <FormComponent.FormInputs />
            <ButtonComponent.ButtonBox>
                {buttons}
            </ButtonComponent.ButtonBox>
        </FormComponent.Form>
    );
};
variant_default.args = {};

