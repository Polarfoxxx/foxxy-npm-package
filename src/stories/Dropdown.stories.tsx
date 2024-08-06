import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DropdownComponent } from "../components/Dropdown/components/Dropdown.master";

const meta: Meta = {
    title: 'FoxxyComponents/Dropdown',
    component: DropdownComponent.Dropdown, // Corrected from Dropdopwn to Dropdown
    argTypes: {
        variant_drop: {
            description: 'You can choose a color variant for the component Dropdown',
            options: ['default', 'dark', 'white'],
            control: { type: 'radio' },
        },
        drop_text: {
            description: 'Dropdown name max 18',
            control: { type: 'text' },
        },
        dropCount: {
            description: "Number of item components",
            control: { type: 'number', min: 1, max: 15 },
            defaultValue: 1,
        },
        href: {
            control: { type: 'text' },
        },
        name_link: {
            description: 'Link name max 34',
            control: { type: 'text' },
        },
    },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof DropdownComponent.Dropdown> & React.ComponentProps<typeof DropdownComponent.DropdownItems>>;

export const Variant_Dropdown: Story = {
    args: {
        variant_drop: "default",
        name_link: "my link",
        drop_text: "dropdown",
        href: "https://translate.google.com/?hl=sk&sl=en&tl=sk&text=Your%20npm_public%20branch%20isn%27t%20protected&op=translate",
        dropCount: 1
    },

    render: (args) => {
        const [numdropItem, setNumdropItem] = React.useState<number>();

        React.useEffect(() => {
            setNumdropItem(args.dropCount)
        }, [args.dropCount]);

        const dropItems = [...Array(numdropItem)].map((_, i) => (
            <DropdownComponent.DropdownItems
                key={i}
                href={args.href}
                name_link={args.name_link}
            />
        ));

        return (
            <DropdownComponent.Dropdown {...args}>
                <DropdownComponent.DropdownBox>
                    {dropItems}
                </DropdownComponent.DropdownBox>
            </DropdownComponent.Dropdown>
        );
    }
};
