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
        argTypes: {
            carouselItems: {
                control: {
                    type: 'array', // Nastavíme, že argument bude pole
                    control: {
                    separator: ';', // Oddelovač, ak chcete vkladať viac položiek v jednom texte
                        type: 'table', // Nastavíme typ kontroléra na "table"
                    },
                    defaultValue: [],

                },
            }
        }
    },
    args: {
        carouselItems: ["sds"]
    }

}
export default meta;

type Story = StoryObj<typeof CarouselComponent.Carousel>;


export const variant_carousel: Story = (args) => {
    return (
        <CarouselComponent.Carousel {...args}>
            <CarouselComponent.CarouselBox>
                {
                    args.carouselItems.map((item, index) => (
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
