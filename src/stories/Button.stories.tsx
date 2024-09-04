import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from '../components/Button';
import React from 'react';
import { fn } from '@storybook/test';

const meta: Meta = {
  title: 'FoxxyComponents/Button',
  component: ButtonComponent.Button,
  args: { onClick: fn(), },
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    text: {
      control: "text",
      description: "text in button",
    },
    variant_btn: {
      description: "you can choose a color variant for the component button",
      options: ["primaryButton", "secondaryButton", "alertButton", "successButton", "darkButton", "nightButton"],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: "default" }
      }
    },
    withBorder: {
      control: { type: 'boolean' },
      description: "border change",
      defaultValue: false,

    },
    radiusBorder: {
      description: "rounded edges",
      control: { type: 'boolean' },
      defaultValue: false,

    },
    lg: {
      description: "bigger",
      control: { type: 'boolean' },
      defaultValue: false,

    },
    sm: {
      description: "smaller",
      control: { type: 'boolean' },
      defaultValue: false,
    },
    customBackGrColor: {
      description: "Set custom background color for element",
      control: { type: 'color' },
    },
    customTextColor: {
      description: "Set custom text color for element",
      control: { type: 'color' },
    },

  },
};
export default meta;

type Story = StoryObj<typeof ButtonComponent.Button>;

export const VariantButton: Story = {
  args: {
    variant_btn: "primaryButton",
    text: "click my button",
    withBorder: false,
    radiusBorder: false,
    lg: false,
    sm: false,
  },

  render: (args) => {
    return (
        <ButtonComponent.Button {...args} />
    )
  }
};




