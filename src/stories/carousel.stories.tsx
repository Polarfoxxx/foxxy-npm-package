import { storiesOf, Meta, StoryObj } from "@storybook/react";
import React from "react";
import { CarouselComponent } from "../components/Carousel/components/Carousel.master";

const meta: Meta = {
    title: 'Example/Carousel',
    component: CarouselComponent.Carousel,
    tags: ['autodocs'],
    argTypes: {
        variant_crs: {
            description: 'you can choose a color variant for the component Carousel',
            options: ['default', 'dark', 'white'],
            control: { type: 'radio' },
        }
    }
}
export default meta;

type Story = StoryObj<typeof CarouselComponent.Carousel>;

export const variant_carousel: Story = (args) => {
    return (
        <CarouselComponent.Carousel {...args}>

        </CarouselComponent.Carousel>
    )
};
variant_carousel.args = {}