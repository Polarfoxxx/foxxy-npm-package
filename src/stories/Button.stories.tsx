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
    button_text: {
      control:  { type: 'text' },
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
    withBorder_button: {
      control: { type: 'boolean' },
      description: "border change",
      defaultValue: false,

    },
    radiusBorder_button: {
      description: "rounded edges",
      control: { type: 'boolean' },
      defaultValue: false,

    },
    lg_button: {
      description: "bigger",
      control: { type: 'boolean' },
      defaultValue: false,

    },
    sm_button: {
      description: "smaller",
      control: { type: 'boolean' },
      defaultValue: false,
    },
    customBackGrColor_button: {
      description: "Set custom background color for element",
      control: { type: 'color' },
    },
    customTextColor_button: {
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
    button_text: "click my button",
    withBorder_button: false,
    radiusBorder_button: false,
    lg_button: false,
    sm_button: false,
  },

  render: (args) => {
    return (
        <ButtonComponent.Button {...args} />
    )
  }
};




