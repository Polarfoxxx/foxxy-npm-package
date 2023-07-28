import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { OffCanvasComponent } from "../components/OffCanvas/components/OffCanvas.master";
import { ButtonComponent } from "../components/Button/components/Button.master";
import { action } from '@storybook/addon-actions';
import ButtonComponent_stories from "./Button.stories";
import FormComponent_stories from "./Form.stories"


const meta: Meta = {
    title: 'Example/OffCanvas',
    component: OffCanvasComponent.OffCanvas,
    tags: ['autodocs'],
    argTypes: {
        position: {
            description: 'position OffCanvas',
            options: ['left', 'top', 'right'],
            control: { type: 'radio' },
            defaultValue: "top"
        },
        show: {
            description: "show/hide",
            control: "boolean",
            defaultValue: false
        },
        ...ButtonComponent_stories.argTypes,
        ...FormComponent_stories.argTypes

    },
    args: {
        show: false,
        position: "top"
    }
};
export default meta;

type Story = StoryObj<typeof OffCanvasComponent.OffCanvas | typeof ButtonComponent.Button>;

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  action("click button")();
};


export const variant_OffCanvas: Story = (args) => {
    return (
        <OffCanvasComponent.OffCanvas {...args}>
            <OffCanvasComponent.OffCanvasHeader>
                scsc
            </OffCanvasComponent.OffCanvasHeader>
            <OffCanvasComponent.OffCanvasBody>
                cscs
            </OffCanvasComponent.OffCanvasBody>
            <OffCanvasComponent.OffCanvasButoonBox>
                <ButtonComponent.ButtonBox>
                    <ButtonComponent.Button onClick={handleClick} {...args} />
                </ButtonComponent.ButtonBox>
            </OffCanvasComponent.OffCanvasButoonBox>
        </OffCanvasComponent.OffCanvas>
    );
};

variant_OffCanvas.args = {}