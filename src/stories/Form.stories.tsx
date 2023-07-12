// import the FormComponent and the ButtonComponent
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormComponent } from '../components/Form/components/Form.master';
import { ButtonComponent } from '../components/Button/components/Button.master';
import FormHeader from "./FormHeader.stories"

const meta: Meta<typeof FormComponent.Form> = {
    title: 'Example/Form',
    component: FormComponent.Form,
};

export default meta;

// define the story template
type Story = StoryObj<typeof FormComponent.Form>;

// export the story with the dark variant and some inputs and buttons
export const OneItem: Story = {
    render: (args) => (
        <FormComponent.Form {...args}>
            <FormComponent.FormHeader />
        </FormComponent.Form>
    ),
};