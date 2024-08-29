import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from '../components/Button';
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
        variant_btn: {
            description: "you can choose a variant for the component button",
            options: ["primaryButton", "secondaryButton", "alertButton", "successButton", "darkButton", "nightButton"],
            control: { type: 'radio' }
        },
        text: {
            description: "button text",
            control: { type: 'text' }
        },
        withBorder: {
            description: "button border",
            control: { type: 'boolean' }
        },
        radiusBorder: {
            description: "button border radius",
            control: { type: 'boolean' }
        },
        lg: {
            description: "large button",
            control: { type: 'boolean' }
        },
        sm: {
            description: "small button",
            control: { type: 'boolean' }
        },
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
        numberOfButtons: {
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
        }
    }
};
export default meta;

type ButtonBoxStoryArgs = Omit<
    React.ComponentProps<typeof ButtonComponent.Button> &
    React.ComponentProps<typeof ButtonComponent.ButtonBox>,
    'numberOfButtons'
> & {
    numberOfButtons: number;
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

        buttonBox_variant: "primaryButtonBox",
        layout_Buttonts: "row",
        custom_width_buttonBox: "auto",
        custom_height_buttonBox: "auto",
        custom_gap_Buttons: "5px",
        custom_background_Box: "",
        custom_rounded: "",
        numberOfButtons: 1,
    },

    render: (args) => {
        const [numButtons, setNumButtons] = React.useState<number>();

        React.useEffect(() => {
            setNumButtons(args.numberOfButtons)
        }, [args.numberOfButtons]);

        const buttons = [...Array(numButtons)].map((_, i) => (
            <ButtonComponent.Button
                key={i}
                variant_btn={args.variant_btn}
                text={args.text}
                withBorder={args.withBorder}
                radiusBorder={args.radiusBorder}
                lg={args.lg}
                sm={args.sm}
                onClick={args.onClick}
                customBackGrColor={args.customBackGrColor}
                customTextColor={args.customTextColor}
            />
        ));


        return (
            <ButtonComponent.ButtonBox
                buttonBox_variant={args.buttonBox_variant}
                custom_width_buttonBox={args.custom_width_buttonBox}
                custom_height_buttonBox={args.custom_height_buttonBox}
                layout_Buttonts={args.layout_Buttonts}
                custom_gap_Buttons={args.custom_gap_Buttons}
                custom_rounded={args.custom_rounded}
                custom_background_Box={args.custom_background_Box}>
                {
                    buttons
                }
            </ButtonComponent.ButtonBox>
        );
    }
};