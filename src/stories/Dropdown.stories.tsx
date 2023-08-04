import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DropdownComponent } from "../components/Dropdown/components/Dropdown.master";


const meta: Meta = {
    title: 'FoxxyComp/Dropdown',
    component: DropdownComponent.Dropdopwn,
    tags: ['autodocs'],
    argTypes: {
        variant_drop: {
            description: 'you can choose a color variant for the component Dropdown',
            options: ['default', 'dark', 'white'],
            control: { type: 'radio' },
        },
        drop_text: {
            control: { type: 'text' },
        },
        href: {
            control: { type: 'text' },
        }
    },
    args: {
        variant_drop: "default",
        drop_text: "dropdown",
        href: "https://translate.google.com/?hl=sk&sl=en&tl=sk&text=Your%20npm_public%20branch%20isn%27t%20protected&op=translate"
    }
}
export default meta;

type Story = StoryObj<typeof DropdownComponent.Dropdopwn>;

export const variant_Dropdown: Story = (args) => {

    return (
        <DropdownComponent.Dropdopwn {...args}>
            <DropdownComponent.DropdownBox>
                <DropdownComponent.DropdownItems name_link="dddfdgsdsddfdssssssdddsfdfdfsdddd" {...args} />
                <DropdownComponent.DropdownItems name_link="linkTwo" {...args} />
                <DropdownComponent.DropdownItems name_link="linkThre" {...args} />
                <DropdownComponent.DropdownItems name_link="linkThre" {...args} />
                <DropdownComponent.DropdownItems name_link="linkThre" {...args} />
            </DropdownComponent.DropdownBox>
        </DropdownComponent.Dropdopwn>
    );
};

variant_Dropdown.args = {}