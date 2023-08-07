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
            description: 'Dropdown name max 18',
            control: { type: 'text' },
        },
        dropCount: {
            description: "number of items components",
            control: { type: 'number', min: 1, max: 15 },
            defaultValue: 1,
        },
        href: {
            control: { type: 'text' },
        },
        name_link: {
            description: 'link name max 34',
            control: { type: 'text' },
        }
    },
    args: {
        variant_drop: "default",
        name_link: "my link",
        drop_text: "dropdown",
        href: "https://translate.google.com/?hl=sk&sl=en&tl=sk&text=Your%20npm_public%20branch%20isn%27t%20protected&op=translate"
    }
}
export default meta;

type Story = StoryObj<typeof DropdownComponent.Dropdopwn>;

export const variant_Dropdown: Story = (args) => {

    const { dropCount = 1 } = args;
    const dropItems = Array.from({ length: dropCount }, (_, index) => (
        <DropdownComponent.DropdownItems {...args} key={`items${index}`} />
    ));
    return (
        <DropdownComponent.Dropdopwn {...args}>
            <DropdownComponent.DropdownBox>
                {dropItems}
            </DropdownComponent.DropdownBox>
        </DropdownComponent.Dropdopwn>
    );
};

variant_Dropdown.args = {}