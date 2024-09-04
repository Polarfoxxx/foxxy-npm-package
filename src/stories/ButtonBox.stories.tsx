import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from '../components/Button';
import buttonComponent_stories from "./Button.stories"
import React from 'react';
import { fn } from '@storybook/test';

const meta: Meta = {
    title: 'FoxxyComponents/ButtonBox',
    component: ButtonComponent.ButtonBox,
    args: { onClick: fn(), },
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        buttonBox_variant: {
            description: "you can choose a variant for the component buttonBox",
            options: ["primaryButtonBox", "secondaryButtonBox", "alertButtonBox"],
            control: { type: 'radio' }
        },
        layout_Buttonts: {
            description: "layout buttons in buttom box",
            control: { type: 'radio' },
            options: ["column", "row"],
        },
        customBackGrColor: {
            description: "Set custom background color for element",
            control: { type: 'color' },
        },
        customTextColor: {
            description: "Set custom text color for element",
            control: { type: 'color' },
        },
        custom_width_buttonBox: {
            description: "you can choose a width for the component buttonBox",
            control: { type: 'text' }
        },
        custom_height_buttonBox: {
            description: "you can choose a height for the component buttonBox",
            control: { type: 'text' }
        },
        buttons_Count: {
            description: "number of buttons in the button box",
            control: { type: 'number', min: 1, max: 10 },
            defaultValue: 1,
        },
        custom_gap_Buttons: {
            description: "gap buttons components in buttom box",
            control: { type: 'text' },
            defaultValue: 1,
        },
        custom_background_Box: {
            description: "change a backgroundColor in box",
            control: { type: 'color' },
        },
        custom_rounded: {
            description: "change a bordeer radius in box",
            control: { type: 'text' },
            defaultValue: "0",
        },
        ...buttonComponent_stories.argTypes
    }
};
export default meta;

type ButtonBoxStoryArgs = Omit<
    React.ComponentProps<typeof ButtonComponent.Button> &
    React.ComponentProps<typeof ButtonComponent.ButtonBox>,
    'numberOfButtons'
> & {
    buttons_Count: number;
};

type Story = StoryObj<ButtonBoxStoryArgs>;

export const VariantButtonBox: Story = {
    args: {
        variant_btn: "primaryButton",
        text: "click my button",
        withBorder: false,
        radiusBorder: false,
        lg: false,
        sm: false,
        customBackGrColor: "",
        customTextColor: "",

        ...buttonComponent_stories.args,
      
        buttons_Count: 1,
    },

    render: (args) => {
        const [numButtons, setNumButtons] = React.useState<number>();

        React.useEffect(() => {
            setNumButtons(args.buttons_Count)
        }, [args.buttons_Count]);

        const buttons = [...Array(numButtons)].map((_, i) => (
            <ButtonComponent.Button {...args} />
        ));

        return (
            <ButtonComponent.ButtonBox {...args}>
                {buttons}
            </ButtonComponent.ButtonBox>
        );
    }
};