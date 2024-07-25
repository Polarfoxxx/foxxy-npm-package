import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from '../components/Button/components/Button.master';
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
      options: ["primaryButton", "secondaryButton", "alertButton"],
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
      description: "smaller",
      control: "boolean",
      defaultValue: false,
    },
    customBackGrColor: {
      description: "Set custom background color for element",
      control: "color"
    },
    customTextColor: {
      description: "Set custom text color for element",
      control: "color",
    }
  },
};
export default meta;

type Story = StoryObj<typeof ButtonComponent.Button>;
export const VariantDefault: Story = {
  args: {
    variant_btn: "primaryButton",
    text: "click my button",
    withoutBorder: false,
    radiusBorder: false,
    lg: false,
    sm: false,
  },

  render: (args) => (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button {...args} />
    </ButtonComponent.ButtonBox>
  )
};





