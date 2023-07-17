// import the FormComponent and the ButtonComponent
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormComponent } from '../components/Form/components/Form.master';
import { ButtonComponent } from '../components/Button/components/Button.master';

const meta: Meta<typeof FormComponent.Form> = {
    title: 'Example/Form',
    component: FormComponent.Form,
    tags: ['autodocs'],
    argTypes: {
        formName: {
            description: "choose the name of the Form",
            control: "text",
            defaultValue: "me form"
        },
        variant: {
            description: "you can choose a color variant for the component Form",
            options: ['default', 'dark', "funny", "white"],
            control: { type: 'radio' },
        },
    },
    args: {
        formName: "me form"
    }
};
export default meta;


type Story = StoryObj<typeof FormComponent.Form>;

export const variant_default: Story = {
    render: (args) => (
        <FormComponent.Form {...args}>
            <FormComponent.FormHeader />
            <FormComponent.FormInputs />
            <ButtonComponent.ButtonBox>
                <ButtonComponent.Button text="click" />
            </ButtonComponent.ButtonBox>
        </FormComponent.Form>
    ),
};


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