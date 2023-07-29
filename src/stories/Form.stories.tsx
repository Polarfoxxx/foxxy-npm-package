// import the FormComponent and the ButtonComponent
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormComponent } from '../components/Form/components/Form.master';
import { ButtonComponent } from '../components/Button/components/Button.master';
import ButtonComponent_stories from "./Button.stories";
import { action } from '@storybook/addon-actions';

const meta: Meta = {
    title: 'Example/Form',
    component: FormComponent.Form,
    tags: ['autodocs'],
    argTypes: {
        formName: {
            description: 'choose the name of the Form',
            control: 'text',
            defaultValue: 'my form',
        },
        variant_form: {
            description: 'you can choose a color variant for the component Form',
            options: ['default', 'dark', 'funny', 'white'],
            control: { type: 'radio' },
        },
        label: {
            description: "the name of the input",
            control: "text",
        },
        placeholder: {
            description: "the placeholder of the input",
            control: "text",
        },
        buttonCount: {
            description: "number of button components",
            control: { type: 'number', min: 1, max: 5 },
            defaultValue: 1,
        },
        inputCount: {
            description: "number of input components",
            control: { type: 'number', min: 1, max: 5 },
            defaultValue: 1,
        },
        ...ButtonComponent_stories.argTypes
    },

    args: {
        formName: 'me form',
        label: "",
        placeholder: "me input",
        ...ButtonComponent_stories.args
    },
};
export default meta;

/* spojenie typeOF componentov*/
type Story = StoryObj<typeof FormComponent.Form> | StoryObj<typeof ButtonComponent.Button>;

export const variant_default: Story = (args) => {
    /* funkcia pre submit */
const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    action("submit")()
};
    const { buttonCount = 1 } = args;
    const buttons = Array.from({ length: buttonCount }, (_, index) => (
        <ButtonComponent.Button onClick={handleClick} type='submit' {...args} key={`button${index}`} />
    ));
    const { inputCount = 1 } = args;
    const inputs = Array.from({ length: inputCount }, (_, index) => (
        <FormComponent.FormInputs {...args} key={`Form${index}`} />
    ));

    return (
        <FormComponent.Form onSubmit={handleClick} variant='default' {...args}>
            <FormComponent.FormHeader />
            {inputs}
            <ButtonComponent.ButtonBox>
                {buttons}
            </ButtonComponent.ButtonBox>
        </FormComponent.Form>
    );
};
variant_default.args = {};



export const variant_dark: Story = (args) => {
    return (
        <FormComponent.Form variant_form='dark' {...args}>
            <FormComponent.FormHeader />
            <FormComponent.FormInputs {...args}/>
            <ButtonComponent.ButtonBox>
                <ButtonComponent.Button text="click" />
            </ButtonComponent.ButtonBox>
        </FormComponent.Form>
    )
};
variant_dark.args = {}


export const variant_funny: Story = (args) => {
    return (
        <FormComponent.Form variant_form='funny' {...args}>
            <FormComponent.FormHeader />
            <FormComponent.FormInputs {...args}/>
            <ButtonComponent.ButtonBox>
                <ButtonComponent.Button text="click" />
            </ButtonComponent.ButtonBox>
        </FormComponent.Form>
    )
};
variant_funny.args = {}


export const variant_white: Story = (args) => {
    return (
        <FormComponent.Form variant_form='white' {...args}>
            <FormComponent.FormHeader />
            <FormComponent.FormInputs {...args}/>
            <ButtonComponent.ButtonBox>
                <ButtonComponent.Button text="click" />
            </ButtonComponent.ButtonBox>
        </FormComponent.Form>
    )
};
variant_white.args = {}
