import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { InvenctoryComponent } from "../";

type MyItemType = {
    name: string;
    age: number;
    job: string;
    hobies: string;
};

const meta: Meta = {
    title: 'FoxxyComponents/Invenctory',
    component: InvenctoryComponent.InventoryMaster,
    decorators: [
        (Story) => (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', paddingTop: '20px' }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        // Definuj ďalšie argumenty, ak je potrebné
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
        ],
        group_first: ["Názov", "name"],
        group_second: ["Vek", "age"],
        group_third: ["Práca", "job"],
        group_fourth: ["Koníček", "hobies"]
    },
    render: (args) => {
        return (
            <InvenctoryComponent.InventoryMaster {...args}>
                <InvenctoryComponent.InventoryHeader />
                <InvenctoryComponent.InventoryList<MyItemType> {...args} />
            </InvenctoryComponent.InventoryMaster>
        );
    },
};
