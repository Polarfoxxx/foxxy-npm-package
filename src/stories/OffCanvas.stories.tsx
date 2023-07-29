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
            defaultValue: "left"
        },
        variant_offCnv:{
                description: 'you can choose a color variant for the component OffCanvas',
                options: ['default', 'dark', 'white'],
                control: { type: 'radio' },
        },
        show: {
            description: "show/hide",
            control: "boolean",
            defaultValue: false
        },
        header_Tittle: {
            description: "write the name ofCanvas",
            control: "text",
            defaultValue: "My titte",
        },
        body_content: {
            description: "write the content ofCanvas",
            control: "text",
            defaultValue: "My titte",
        },
        ...ButtonComponent_stories.argTypes,

    },
    args: {
        show: false,
        position: "left",
        header_Tittle: "My titte",
        body_content: "My content",
        variant_offCnv: "default",
        ...ButtonComponent_stories.args,
    }
};
export default meta;

type Story = StoryObj<typeof OffCanvasComponent.OffCanvas | typeof ButtonComponent.Button>;

const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    action("click button setShow FALSE")();
};


export const variant_OffCanvas: Story = (args) => {
    return (
        <OffCanvasComponent.OffCanvas {...args}>
            <OffCanvasComponent.OffCanvasHeader>
                {args.header_Tittle}
            </OffCanvasComponent.OffCanvasHeader>
            <OffCanvasComponent.OffCanvasBody>
                {args.body_content}
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