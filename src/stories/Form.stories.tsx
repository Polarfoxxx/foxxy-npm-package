// import the FormComponent and the ButtonComponent
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormComponent } from '../components/Form/components/Form.master';
import { ButtonComponent } from '../components/Button/components/Button.master';
import buttonComponent_stories from "./Button.stories"



const meta: Meta = {
    title: 'Example/Form',
    component: FormComponent.Form,
    tags: ['autodocs'],
    argTypes: {
        formName: {
            description: 'choose the name of the Form',
            control: 'text',
            defaultValue: 'me form',
        },
        variant: {
            description: 'you can choose a color variant for the component Form',
            options: ['default', 'dark', 'funny', 'white'],
            control: { type: 'radio' },
        },
        buttonCount: {
            description: "specify the number of ButtonComponents to render",
            control: { type: 'number', min: 1, max: 5 },
            defaultValue: 1,
        },
        ...buttonComponent_stories.argTypes
    },

    args: {
        formName: 'me form',
        ...buttonComponent_stories.args
    },
};


export default meta

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



export const variant_dark: Story = {
    render: (args) => (
        <FormComponent.Form variant='dark' {...args}>
            <FormComponent.FormHeader />
            <FormComponent.FormInputs />
            <ButtonComponent.ButtonBox>
                <ButtonComponent.Button text="click" />
            </ButtonComponent.ButtonBox>
        </FormComponent.Form>
    ),
};

export const variant_funny: Story = {
    render: (args) => (
        <FormComponent.Form variant='funny' {...args}>
            <FormComponent.FormHeader />
            <FormComponent.FormInputs />
            <ButtonComponent.ButtonBox>
                <ButtonComponent.Button text="click" />
            </ButtonComponent.ButtonBox>
        </FormComponent.Form>
    ),
};

export const variant_white: Story = {
    render: (args) => (
        <FormComponent.Form variant='white' {...args}>
            <FormComponent.FormHeader />
            <FormComponent.FormInputs />
            <ButtonComponent.ButtonBox>
                <ButtonComponent.Button text="click" />
            </ButtonComponent.ButtonBox>
        </FormComponent.Form>
    ),
}; 