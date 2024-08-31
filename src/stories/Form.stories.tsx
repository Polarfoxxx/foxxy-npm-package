// import the FormComponent and the ButtonComponent
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormComponent } from '../components/Form/components/Form.master';
import { ButtonComponent } from '../components/Button';
import ButtonComponent_stories from "./Button.stories";
import { action } from '@storybook/addon-actions';

const meta: Meta = {
    title: 'FoxxyComponents/Form',
    component: FormComponent.Form,
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', paddingTop: '20px' }}>
                <Story />
            </div>
        ),
    ],
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
};
export default meta;

/* spojenie typeOF componentov*/
type FormStoryArgs = Omit<
    React.ComponentProps<typeof FormComponent.Form> &
    React.ComponentProps<typeof ButtonComponent.Button>,
    "">

type Story = StoryObj<FormStoryArgs>;



export const Variant_Form: Story = {
    args: {
        variant_dropdown: "primaryDropdown",
        lg: false,
        sm: false,
        border: false,
        dropdown_name: "dropdown",
        custom_background_color_dropdown: "",
        custom_showAndHidden_time: 0.4,
        custom_rouded: "",
        custom_textColor_for_dropdown: "",
        name_link: "my link",
        href: "https://translate.google.com/?hl=sk&sl=en&tl=sk&text=Your%20npm_public%20branch%20isn%27t%20protected&op=translate",
        custom_textColor_forItem: "",
        dropCount: 3,
        layout: "row"
    },
    render: {
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

        return(
    <FormComponent.Form onSubmit={ handleClick } variant='default' { ...args }>
    <FormComponent.FormHeader />
{ inputs }
<ButtonComponent.ButtonBox>
    {buttons}
</ButtonComponent.ButtonBox>
    </FormComponent.Form >
);
    }
  
};

