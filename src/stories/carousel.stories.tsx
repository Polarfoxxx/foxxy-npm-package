import { Meta, StoryObj } from "@storybook/react";
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
        },
    },
      args: {
         carouselItems : ["test1", "test2"]
     }, 
};
export default meta;





type Story = StoryObj<typeof CarouselComponent.Carousel>;

export const variant_carousel: Story = (args) => {
    return (
        <CarouselComponent.Carousel {...args}>
            <CarouselComponent.CarouselBox>
                {
                    Array.isArray(args.carouselItems) && args.carouselItems.map((item: any, index: number) => (
                        <CarouselComponent.CarouselItem key={index}>
                            {item}
                        </CarouselComponent.CarouselItem>
                    ))
                }

            </CarouselComponent.CarouselBox>
        </CarouselComponent.Carousel>
    );
};

variant_carousel.args = {};
