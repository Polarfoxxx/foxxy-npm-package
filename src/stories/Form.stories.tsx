// import the FormComponent and the ButtonComponent
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FormComponent } from '../components/Form/components';
import { ButtonComponent } from '../components/Button';
import buttonBoxComponent_stories from "./ButtonBox.stories"
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
        variant_form: {
            description: 'you can choose a color variant for the component Form',
            options: ["primaryForm", "secondaryForm", "alertForm", "successForm", "darkForm", "nightForm"],
            control: { type: 'radio' },
        },
        formName: {
            description: 'set the name or tittle of the Form',
            control: 'text',
            defaultValue: 'my form',
        },
        form_border: {
            description: 'set the name or tittle of the Form',
            control: { type: 'boolean' },
        },

        placeholder: {
            description: "the placeholder of the input",
            control: "text",
        },

        custom_background_form: {
            control: { type: 'color' },
        },
        custom_text_color_form: {
            control: { type: 'color' },
        },
        custom_rouded_form: {
            control: { type: 'text' },
        },
        custom_padding_form: {
            control: { type: 'text' },
        },
        custom_width_form: {
            control: { type: 'text' },
        },
        custom_height_form: {
            control: { type: 'text' },
        },
        label_name: {
            description: "the name of the input",
            control: "text",
        },
        inputs_Count: {
            description: "number of input components",
            control: { type: 'number', min: 1, max: 5 },
            defaultValue: 1,
        },
        buttons_Count: {
            description: "number of buttons in the button box",
            control: { type: 'number', min: 1, max: 10 },
            defaultValue: 1,
        },
        ...buttonBoxComponent_stories.argTypes
    },
};
export default meta;

/* spojenie typeOF componentov*/
type FormStoryArgs = Omit<
    React.ComponentProps<typeof FormComponent.Form> &
    React.ComponentProps<typeof FormComponent.FormHeader> &
    React.ComponentProps<typeof FormComponent.FormInputs> &
    React.ComponentProps<typeof ButtonComponent.ButtonBox> &
    React.ComponentProps<typeof ButtonComponent.Button>,
    "inputs_count" & "buttons_Count"> & {
        inputs_Count: number,
        buttons_Count: number
    };

type Story = StoryObj<FormStoryArgs>;

export const Variant_Form: Story = {
    args: {
        variant_form: "primaryForm",
        form_name: "dropdown",
        form_border: false,
        custom_background_form: "",
        custom_text_color_form: "",
        custom_rouded_form: "",
        custom_padding_form: "",
        custom_width_form: "",
        custom_height_form: "",

        label_name_form: "",

        ...buttonBoxComponent_stories.args,

        inputs_Count: 1,
        buttons_Count: 1

    },

    render: (args) => {
        const handleClick = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            action("submit")()
        };
        const [numInputItem, setNumInputItem] = React.useState<number>(1);
        const [numButtonItem, setNumButtonItem] = React.useState<number>(1);

        React.useEffect(() => {
            setNumInputItem(args.inputs_Count);
            setNumButtonItem(args.buttons_Count)
        }, [args.inputs_Count, args.buttons_Count]);

        //? array for inputs count..........................
        const inputItems = [...Array(numInputItem)].map((_, i) => (
            <FormComponent.FormInputs {...args} />
        ));
        //? array for buttons count.........................
        const buttonsItems = [...Array(numButtonItem)].map((_, i) => (
            <ButtonComponent.Button {...args} />
        ));

        return (
            <FormComponent.Form onSubmit={handleClick} {...args}>
                <FormComponent.FormHeader />
                <>
                    {...inputItems}
                </>
                <ButtonComponent.ButtonBox {...args}>
                    {...buttonsItems}
                </ButtonComponent.ButtonBox>
            </FormComponent.Form>
        );
    }
};
