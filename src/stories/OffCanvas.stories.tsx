import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { OffCanvasComponent } from "../components/OffCanvas/components/OffCanvas.master";
import { ButtonComponent } from "../components/Button/components/Button.master";
import { action } from '@storybook/addon-actions';


const meta: Meta = {
    title: 'Example/OffCanvas',
    component: OffCanvasComponent.OffCanvas,
    tags: ['autodocs'],
    argTypes: {
        position: {
            description: 'position OffCanvas',
            options: ['left', 'top', 'right'],
            control: { type: 'radio' },
        }

    }
};
export default meta;

type Story = StoryObj<typeof OffCanvasComponent.OffCanvas | typeof ButtonComponent.Button>;

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
                    <ButtonComponent.Button onClick={action("click button")} variant_btn='default' {...args} />
                </ButtonComponent.ButtonBox>
            </OffCanvasComponent.OffCanvasButoonBox>
        </OffCanvasComponent.OffCanvas>
    );
};

variant_OffCanvas.args = {}