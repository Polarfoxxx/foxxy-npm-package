import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from '../components/Button/components';
import { ButtonBox } from '../components/Button/components';
import React from 'react';
import { fn } from '@storybook/test';

const meta: Meta = {
    title: 'FoxxyComponents/ButtonBox',
    component: ButtonComponent.Button,
    subcomponents: { ButtonBox },
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
    }
};
export default meta;

type Story = StoryObj<React.ComponentProps<typeof ButtonComponent.Button> & React.ComponentProps<typeof ButtonBox>>;

export const VariantButton: Story = {
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
    },

    render: (args) => (
        <ButtonBox
            buttonBox_variant={args.buttonBox_variant}
            width_buttonBox={args.width_buttonBox}
            height_buttonBox={args.height_buttonBox}>
            <ButtonComponent.Button
                variant_btn={args.variant_btn}
                text={args.text}
                withBorder={args.withBorder}
                radiusBorder={args.radiusBorder}
                lg={args.lg}
                sm={args.sm}
                onClick={args.onClick}
            />
        </ButtonBox>
    )
};
