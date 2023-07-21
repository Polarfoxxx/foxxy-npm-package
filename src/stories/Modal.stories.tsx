
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalComponent } from '../components/Modal/components/Modal.master';
import { FormComponent } from '../components/Form/components/Form.master';
import { ButtonComponent } from '../components/Button/components/Button.master';
import buttonComponent_stories from "./Button.stories";
import formComponent_stories from "./Form.stories"


const meta: Meta = {
    title: 'Example/Modal',
    component: ModalComponent.Modal,
    tags: ['autodocs'],
    argTypes: {
        variant_mdl: {
            description: 'you can choose a color variant for the component Modal',
            options: ['default', 'dark', 'white'],
            control: { type: 'radio' },
        },
        show: {
            control: "boolean",
            description: "show/hide",
            defaultValue: false,
            table: {
                defaultValue: { summary: false }
            },
        },
        ...buttonComponent_stories.argTypes,
        ...formComponent_stories.argTypes


    },
    args: {
        show: false,
        text: "click me"
    }
}

export default meta;


/* spojenie typeOF componentov*/
type Story = StoryObj<typeof FormComponent.Form> | StoryObj<typeof ButtonComponent.Button>;

export const variant_modals: Story = (args) => {
    const { buttonCount = 1} = args;
    const buttons = Array.from({ length: buttonCount }, (_, index) => (
        <ButtonComponent.Button {...args} key={`button${index}`} />
    ));
    return (
        <ModalComponent.Modal  {...args}>
            <FormComponent.Form variant='default' {...args}>
                <FormComponent.FormHeader />
                <FormComponent.FormInputs />
                <ButtonComponent.ButtonBox>
                    {buttons}
                </ButtonComponent.ButtonBox>
            </FormComponent.Form>
        </ModalComponent.Modal>
    );
};
variant_modals.args = {};

