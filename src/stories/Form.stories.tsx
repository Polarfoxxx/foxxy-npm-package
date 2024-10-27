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
        //? arg for form component..............
        variant_form: {
            description: 'you can choose a color variant for the component Form',
            options: ["primaryForm", "secondaryForm", "alertForm", "successForm", "darkForm", "nightForm"],
            control: { type: 'radio' },
        },
        form_Name: {
            description: 'set the name or tittle of the Form',
            control: 'text',
            defaultValue: 'my form',
        },

        custom_background_form: {
            control: { type: 'color' },
        },
        custom_text_color_form: {
            control: { type: 'color' },
        },
        custom_rouded_form: {
            description: "set the border radius for form component",
            defaultValue: 0,
            control: {
                type: 'range',
                min: 1,
                max: 100,
                step: 1,
            },
        },
        custom_padding_form: {
            description: "set the padding for form component",
            defaultValue: 5,
            control: {
                type: 'range',
                min: 5,
                max: 100,
                step: 1,
            },
        },
        custom_width_form: {
            control: { type: 'text' },
        },
        custom_height_form: {
            control: { type: 'text' },
        },
        custom_gap_input: {
            description: "set the gap between components inside form",
            defaultValue: 5,
            control: {
                type: 'range',
                min: 5,
                max: 100,
                step: 1,
            },
        },
        //? arg for header component..............
        variant_formheader: {
            options: ["none", "underLine", "boldHeader", "underLineBold"],
            description: "change formHeader type",
            control: { type: 'radio' },
        },
        //? arg for leftSide component..............
        form_side_info: {
            description: 'add info box left side',
            control: { type: 'boolean' },
        },
        leftSideInfoText: {
            description: 'text in left side component',
            control: { type: 'text' },
        },
        custom_leftSide_layout: {
            description: "left side layout",
            defaultValue: 0,
            control: {
                type: 'range',
                min: 5,
                max: 50,
                step: 1,
            }
        },
        //? arg for input component..............
        placeholder: {
            description: "the placeholder of the input",
            control: { type: 'text' },
        },
        label_name_form: {
            description: "the name of the input",
            control: { type: 'text' },
        },
        text_align_in_Input: {
            description: "side writing in input",
            control: { type: 'radio' },
            options: ["left", "center", "right"],
        },
        custom_rouded_in_Input: {
            description: "the radius input",
            defaultValue: 0,
            control: {
                type: 'range',
                min: 0,
                max: 50,
                step: 1,
            },
        },
        text_align_label: {
            description: "side writing in label for inmput",
            control: { type: 'radio' },
            options: ["left", "center", "right"],
        },
        oneBorder_input: {
            description: 'change form input variant',
            control: { type: 'boolean' },
        },
        //? arg for button component............
        ...buttonBoxComponent_stories.argTypes,

        //? count..............................
        inputs_Count: {
            description: "number of input components",
            control: { type: 'number', min: 1, max: 5 },
            defaultValue: 2,
        },
        buttons_Count: {
            description: "number of buttons in the button box",
            control: { type: 'number', min: 1, max: 10 },
            defaultValue: 1,
        },
    },
};
export default meta;

//? spojenie typeOF componentov..........................
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
        //? arg for form component..............
        variant_form: "primaryForm",
        form_name: "my form",
        custom_background_form: "",
        custom_text_color_form: "",
        custom_rouded_form: 10,
        custom_padding_form: 10,
        custom_width_form: "450px",
        custom_height_form: "auto",
        custom_gap_input: 7,
        //? arg for header component.............
        variant_formheader: "none",
        //? arg for leftSide component...........
        form_side_info: false,
        leftSideInfoText: "left side",
        custom_leftSide_layout: 5,
        //? arg for input component.............
        placeholder: "my placeholder",
        label_name_form: "my label",
        text_align_in_Input: "center",
        custom_rouded_in_Input: 5,
        text_align_label: "left",
        oneBorder_input: false,
        //? arg for button component............
        ...buttonBoxComponent_stories.args,
        button_text: "my button",
        //? count...............................
        inputs_Count: 2,
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
            <FormComponent.FormInputs key={i} {...args} />
        ));

        //? array for buttons count.........................
        const buttonsItems = [...Array(numButtonItem)].map((_, i) => (
            <ButtonComponent.Button key={i} {...args} />
        ));

        return (
            <FormComponent.Form onSubmit={handleClick} {...args}>
                <FormComponent.FormHeader {...args} />
                {...inputItems}
                <ButtonComponent.ButtonBox {...args}>
                    {buttonsItems}
                </ButtonComponent.ButtonBox>
            </FormComponent.Form>
        );
    }
};
