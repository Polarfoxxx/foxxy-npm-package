import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from '../components/Button/components';
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
            options: ["primaryButton", "secondaryButton", "alertButton"],
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
            options: ["primaryButtonBox", "secundaryButtonBox", "alertButtonBox"],
            control: { type: 'radio' }
        },
        width_buttonBox: {
            description: "you can choose a width for the component buttonBox",
            control: { type: 'text' }
        },
        height_buttonBox: {
            description: "you can choose a height for the component buttonBox",
            control: { type: 'text' }
        },
        numberOfButtons: {
            description: "number of buttons in the button box",
            control: { type: 'number', min: 1, max: 10 },
            defaultValue: 1,
        },
        layout_Buttonts: {
            description: "layout buttons components in buttom box",
            control: { type: 'radio' },
            options: ["column", "row"],
        }
    }
};
export default meta;

type Story = StoryObj<React.ComponentProps<typeof ButtonComponent.Button> & React.ComponentProps<typeof ButtonComponent.ButtonBox>>;
export const VariantButtonBox: Story = {
    args: {
        variant_btn: "primaryButton",
        text: "click my button",
        withBorder: false,
        radiusBorder: false,
        lg: false,
        sm: false,
        buttonBox_variant: "primaryButtonBox",
        width_buttonBox: "200px",
        height_buttonBox: "100px",
        numberOfButtons: 1,
        layout_Buttonts: "row"
    },

    render: (args) => {
        const [numButtons, setNumButtons] = React.useState<number>();
        React.useEffect(() => {
            setNumButtons(args.numberOfButtons)
        }, [args.numberOfButtons])
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
            />
        ));


        return (
            <ButtonComponent.ButtonBox
                buttonBox_variant={args.buttonBox_variant}
                width_buttonBox={args.width_buttonBox}
                height_buttonBox={args.height_buttonBox}
                layout_Buttonts = {args.layout_Buttonts}>
                {
                    buttons
                }
            </ButtonComponent.ButtonBox>
        );
    }
};