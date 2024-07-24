import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from '../components/Button/components/Button.master';
import React from 'react';
import { fn } from '@storybook/test';

const meta: Meta = {
  title: 'FoxxyComponents/Button',
  component: ButtonComponent.Button,
  args: { onClick: fn(), },
  argTypes: {
    text: {
      control: "text",
      description: "text in button",
    },
    variant_btn: {
      description: "you can choose a color variant for the component button",
      options: ["primaryButton" , "secondaryButton" , "alertButton"],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: "default" }
      }
    },
    withoutBorder: {
      control: "boolean",
      description: "border change",
      defaultValue: false,

    },
    radiusBorder: {
      description: "rounded edges",
      control: "boolean",
      defaultValue: false,

    },
    lg: {
      description: "bigger",
      control: "boolean",
      defaultValue: false,

    },
    sm: {
      description: "small",
      control: "boolean",
      defaultValue: false,

    },
  },
};
export default meta;

type Story = StoryObj<typeof ButtonComponent.Button>;
export const VariantDefault: Story = {
  args: {
    variant_btn: "primaryButton",
    text: "click mexy mmmmmm",
    withoutBorder: true,
    radiusBorder: true,
    lg: false,
    sm: false,
  },

  render: (args) => (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button {...args} />
    </ButtonComponent.ButtonBox>
  )
};





