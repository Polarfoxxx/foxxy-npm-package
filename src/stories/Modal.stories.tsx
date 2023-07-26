
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ModalComponent } from '../components/Modal/components/Modal.master';
import { FormComponent } from '../components/Form/components/Form.master';
import { ButtonComponent } from '../components/Button/components/Button.master';
import ButtonComponent_stories from "./Button.stories";
import FormComponent_stories from "./Form.stories"
import { action } from '@storybook/addon-actions';


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
        ...ButtonComponent_stories.argTypes,
        ...FormComponent_stories.argTypes
    },
    args: {
        show: false,
        text: "click me",
        ...ButtonComponent_stories.args,
        ...FormComponent_stories.args
    }
};
export default meta;


const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    action("submit")()
};

/* spojenie typeOF componentov*/
type Story = StoryObj<typeof FormComponent.Form> | StoryObj<typeof ButtonComponent.Button> | StoryObj<typeof ModalComponent.Modal>;

export const variant_modals: Story = (args) => {
    const { buttonCount = 1 } = args;
    const buttons = Array.from({ length: buttonCount }, (_, index) => (
        <ButtonComponent.Button onClick={handleClick} {...args} key={`button${index}`} />
    ));
    const { inputCount = 1 } = args;
    const inputs = Array.from({ length: inputCount }, (_, index) => (
        <FormComponent.FormInputs {...args} key={`button${index}`} />
    ));

    return (
        <ModalComponent.Modal  {...args}>
            <FormComponent.Form onSubmit={handleClick} variant='default' {...args}>
                <FormComponent.FormHeader />
                {inputs}
                <ButtonComponent.ButtonBox>
                    {buttons}
                </ButtonComponent.ButtonBox>
            </FormComponent.Form>
        </ModalComponent.Modal>
    );
};
variant_modals.args = {};

