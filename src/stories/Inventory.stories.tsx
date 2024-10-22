import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InvenctoryComponent } from "../";
import { fn } from '@storybook/test';


type MyItemType = {
    name: string;
    age: number;
    job: string;
    hobies: string;
};

const meta: Meta = {
    title: 'FoxxyComponents/Invenctory',
    component: InvenctoryComponent.InventoryMaster,
    args: { onClick: fn(), },
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', paddingTop: '20px' }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        //? arg for inventory component..............
        variant_Invenctory: {
            description: 'you can choose a color variant for the inventpry component',
            options: ["primaryInvenctory", "secondaryInvenctory", "alertInvenctory", "successInvenctory", "darkInvenctory", "nightInvenctory"],
            control: { type: 'radio' },
        },
        withBorder: {
            description: "border",
            control: { type: 'boolean' },
            defaultValue: false,

        },
        custom_bg_colorInventory: {
            description: "Set custom background color for element",
            control: { type: 'color' },
        },
        custom_rouded_Inventory: {
            description: "set the border radius for inventory component",
            defaultValue: 0,
            control: {
                type: 'range',
                min: 1,
                max: 100,
                step: 1,
            },
        }
    },
};
export default meta;

type InvenctoryStoryArgs =
    React.ComponentProps<typeof InvenctoryComponent.InventoryMaster> &
    React.ComponentProps<typeof InvenctoryComponent.InventoryHeader> &
    React.ComponentProps<typeof InvenctoryComponent.InventoryList<MyItemType>>;  // Typ pre generický komponent

type Story = StoryObj<InvenctoryStoryArgs>;

export const Variant_Invenctory: Story = {
    args: {
        //? arg for inventory component..............
        variant_Invenctory: "primaryInvenctory",
        withBorder: false,
        custom_bg_colorInventory: "",
        custom_rouded_Inventory: 0,
        //? arg for list component...................
        data_list: [
            {
                name: "alex",
                age: 8,
                job: "dentist",
                hobies: "running"
            },
            {
                name: "denis",
                age: 5,
                job: "operator",
                hobies: "gym"
            },
            {
                name: "olek",
                age: 7,
                job: "dentist",
                hobies: "walking"
            },
            {
                name: "buk",
                age: 7,
                job: "pupuo",
                hobies: "pc"
            },
        ],
        group_first: ["Názov", "name"],
        group_second: ["Vek", "age"],
        group_third: ["Práca", "job"],
        group_fourth: ["Koníček", "hobies"]
    },
    render: (args) => {

        const myfunction = (item: any) => {
            console.log(item);
        }
        const mytestFunction = (item: any) => {
            console.log(item);
        }
        const myTestOneFunction = (item: any) => {
            console.log(item);
        }

        return (
            <InvenctoryComponent.InventoryMaster {...args}>
                <InvenctoryComponent.InventoryHeader />
                <InvenctoryComponent.InventoryList<MyItemType> {...args}
                    handle_master_Click={myfunction}
                    handleClick_second={mytestFunction}
                    handleClick_third={myTestOneFunction} />
            </InvenctoryComponent.InventoryMaster>
        );
    },
};
