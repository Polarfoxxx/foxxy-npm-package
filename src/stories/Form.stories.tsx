// import the FormComponent and the ButtonComponent
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormComponent } from '../components/Form/components/Form.master';
import { ButtonComponent } from '../components/Button/components/Button.master';


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
    text: {
        control: "text",
        description: "text in button",
      },
  },

  args: {
    formName: 'me form',
    text: "click me"
  },
};


export default meta 



type Story = StoryObj<any>;

export const variant_dark: Story = {
  render: (args) => (
    <FormComponent.Form variant='dark' {...args}>
      <FormComponent.FormHeader />
      <FormComponent.FormInputs />
      <ButtonComponent.ButtonBox>
        <ButtonComponent.Button   {...args}/>
      </ButtonComponent.ButtonBox>
    </FormComponent.Form>
  ),
};

/* 
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
}; */