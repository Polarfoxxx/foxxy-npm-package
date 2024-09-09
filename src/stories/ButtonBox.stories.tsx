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
        //? arg for buttonBox component......................
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
        custom_width_buttonBox: {
            description: "you can choose a width for the component buttonBox",
            control: { type: 'text' }
        },
        custom_height_buttonBox: {
            description: "you can choose a height for the component buttonBox",
            control: { type: 'text' }
        },
        custom_gap_Buttons: {
            description: "gap buttons components in buttom box",
            control: { type: 'text' },
            defaultValue: "5px",
        },
        custom_rounded_buttonBox: {
            description: "change a bordeer radius in box",
            control: { type: 'text' },
            defaultValue: "0",
        },
        custom_background_buttonBox: {
            description: "change a backgroundColor in box",
            control: { type: 'color' },
        },
        //? count.......................................
        buttons_Count: {
            description: "number of buttons in the button box",
            control: { type: 'number', min: 1, max: 10 },
            defaultValue: 1,
        },
        //? arg for master button component.............
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
        //? arg for buttonBox component...........
        buttonBox_variant: "primaryButtonBox",
        layout_Buttonts: "row",
        custom_width_buttonBox: "",
        custom_height_buttonBox: "",
        custom_gap_Buttons: "5px",
        custom_rounded_buttonBox: "",
        custom_background_buttonBox: "",
        //? arg for master button component......
        ...buttonComponent_stories.args,
        //? count................................
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