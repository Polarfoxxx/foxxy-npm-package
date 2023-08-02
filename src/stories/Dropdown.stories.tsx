import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DropdownComponent } from "../components/Dropdown/components/Dropdown.master";


const meta: Meta = {
    title: 'Example/DropdownComponent',
    component: DropdownComponent.Dropdopwn,
    tags: ['autodocs'],
    argTypes: {
        drop_text: {
            control: { type: 'text' },
        },
        href: {
            control: { type: 'text' },
        }
    },
    args: {
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
                <DropdownComponent.DropdownItems name_link="linkOne" {...args}/>
                <DropdownComponent.DropdownItems name_link="linkTwo" {...args}/>
                <DropdownComponent.DropdownItems name_link="linkThre" {...args}/>
            </DropdownComponent.DropdownBox>
        </DropdownComponent.Dropdopwn>
    );
};

variant_Dropdown.args = {}