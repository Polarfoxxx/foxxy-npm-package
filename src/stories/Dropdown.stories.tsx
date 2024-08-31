import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { DropdownComponent } from "../components/Dropdown";

const meta: Meta = {
    title: 'FoxxyComponents/Dropdown',
    component: DropdownComponent.Dropdown,
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', paddingTop: '20px' }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        variant_dropdown: {
            description: 'You can choose a color variant for the component Dropdown',
            options: ["primaryDropdown", "secondaryDropdown", "alertDropdown", "successDropdown", "darkDropdown", "nightDropdown"],
            control: { type: 'radio' },
        },
        dropdown_name: {
            description: 'Dropdown name max 18',
            control: { type: 'text' },
        },
        lg: {
            description: 'the large component',
            control: { type: 'boolean' },
        },
        sm: {
            description: 'the small component',
            control: { type: 'boolean' },
        },
        border: {
            description: 'the component width border variant',
            control: { type: 'boolean' },
        },

        custom_background_color_dropdown: {
            description: 'custom change color',
            control: { type: 'color' },
        },
        custom_showAndHidden_time: {
            description: 'custom change show and hidden time',
            control: { type: 'number' }, // Opravený typ na number
        },
        custom_rouded: {
            description: 'custom change border radius',
            control: { type: 'text' },
        },
        custom_textColor_for_dropdown: {
            description: 'custom change text color',
            control: { type: 'color' },
        },
        href: {
            control: { type: 'text' },
        },
        custom_textColor_forItem: {
            description: 'custom change text color in item components',
            control: { type: 'color' },
        },
        name_link: {
            description: 'Link name max 34',
            control: { type: 'text' },
        },
        dropCount: {
            description: "Number of item components",
            control: { type: 'number', min: 1, max: 15 },
            defaultValue: 3,
        },
        layout: {
            control: { type: "radio" },
            options: ["row", "column"]
        }
    },
};

export default meta;

type DropdownStoryArgs = Omit<
    React.ComponentProps<typeof DropdownComponent.Dropdown> &
    React.ComponentProps<typeof DropdownComponent.DropdownItems> &
    React.ComponentProps<typeof DropdownComponent.DropdownContent>,
    'layout' & "dropCount"
> & {
    layout: "row", "column";
    dropCount: number
};

type Story = StoryObj<DropdownStoryArgs>;

export const Variant_Dropdown: Story = {
    args: {
        variant_dropdown: "primaryDropdown",
        lg: false,
        sm: false,
        border: false,
        dropdown_name: "dropdown",
        custom_background_color_dropdown: "",
        custom_showAndHidden_time: 0.4,
        custom_rouded: "",
        custom_textColor_for_dropdown: "",
        name_link: "my link",
        href: "https://translate.google.com/?hl=sk&sl=en&tl=sk&text=Your%20npm_public%20branch%20isn%27t%20protected&op=translate",
        custom_textColor_forItem: "",
        dropCount: 3,
        layout: "row"
    },

    render: (args) => {
        const [numdropItem, setNumdropItem] = React.useState<number>();

        React.useEffect(() => {
            setNumdropItem(args.dropCount);
        }, [args.dropCount]);

        const dropItems = [...Array(numdropItem)].map((_, i) => (
            <DropdownComponent.DropdownItems
                key={i}
                href={args.href}
                name_link={args.name_link}
                custom_textColor_forItem={args.custom_textColor_forItem}
            />
        ));

        return (
            <div>
                <div style={{ display: "flex", flexDirection: `${args.layout}` }}>
                    <DropdownComponent.Dropdown
                        variant_dropdown={args.variant_dropdown}
                        lg={args.lg}
                        sm={args.sm}
                        border={args.border}
                        dropdown_name={args.dropdown_name}
                        custom_background_color_dropdown={args.custom_background_color_dropdown}
                        custom_showAndHidden_time={args.custom_showAndHidden_time}
                        custom_rouded={args.custom_rouded}
                        custom_textColor_for_dropdown={args.custom_textColor_for_dropdown}>
                        <DropdownComponent.DropdownContent>
                            {dropItems}
                        </DropdownComponent.DropdownContent>
                    </DropdownComponent.Dropdown>
                    <DropdownComponent.Dropdown
                        variant_dropdown={args.variant_dropdown}
                        lg={args.lg}
                        sm={args.sm}
                        border={args.border}
                        dropdown_name={args.dropdown_name}
                        custom_background_color_dropdown={args.custom_background_color_dropdown}
                        custom_showAndHidden_time={args.custom_showAndHidden_time}
                        custom_rouded={args.custom_rouded}
                        custom_textColor_for_dropdown={args.custom_textColor_for_dropdown}>
                        <DropdownComponent.DropdownContent>
                            {dropItems}
                        </DropdownComponent.DropdownContent>
                    </DropdownComponent.Dropdown>
                </div>
                <div>
                    nkdnsvsdvjdnvkjndkvnfsdnvjks
                </div>
            </div>

        );
    }
};
