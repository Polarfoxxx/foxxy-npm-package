// import the FormComponent and the ButtonComponent
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormComponent } from '../components/Form/components/Form.master';
import { ButtonComponent } from '../components/Button/components/Button.master';
import buttonComponent_stories from "./Button.stories";
import { action } from '@storybook/addon-actions';
import { withActions } from '@storybook/addon-actions/decorator';

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
        ...buttonComponent_stories.argTypes
    },

    args: {
        formName: 'me form',
        label: "",
        placeholder: "me input",
        ...buttonComponent_stories.args
    },
};

const handleClick = (event) => {
    event.preventDefault()

}

export default meta;

/* spojenie typeOF componentov*/
type Story = StoryObj<typeof FormComponent.Form> | StoryObj<typeof ButtonComponent.Button>;

export const variant_default: Story = (args) => {
    const { buttonCount = 1 } = args;
    const buttons = Array.from({ length: buttonCount }, (_, index) => (
        <ButtonComponent.Button onClick={(event) => { event.preventDefault(); action('submit')(event); }} type='submit' {...args} key={`button${index}`} />
    ));
    const { inputCount = 1 } = args;
    const inputs = Array.from({ length: inputCount }, (_, index) => (
        <FormComponent.FormInputs {...args} key={`button${index}`} />
    ));

    return (
        <FormComponent.Form onSubmit={(event) => { event.preventDefault(); action('submit')(event); }} variant='default' {...args}>
            <FormComponent.FormHeader />
            {inputs}
            <ButtonComponent.ButtonBox>
                {buttons}
            </ButtonComponent.ButtonBox>
        </FormComponent.Form>
    );
};
variant_default.args = {};



export const variant_dark: Story = {
    render: (args) => (
        <FormComponent.Form variant_form='dark' {...args}>
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
        <FormComponent.Form variant_form='funny' {...args}>
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
        <FormComponent.Form variant_form='white' {...args}>
            <FormComponent.FormHeader />
            <FormComponent.FormInputs />
            <ButtonComponent.ButtonBox>
                <ButtonComponent.Button text="click" />
            </ButtonComponent.ButtonBox>
        </FormComponent.Form>
    ),
}; 