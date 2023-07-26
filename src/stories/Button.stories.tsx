import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from '../components/Button/components/Button.master';
import React from 'react';
import { action } from '@storybook/addon-actions';

const meta: Meta = {
  title: 'Example/Button',
  component: ButtonComponent.Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: "text",
      description: "text in button (max 9 letters)",
    },
    variant_btn: {
      description: "you can choose a color variant for the component button",
      options: ['default', 'dark', "funny", "white", "sun", "ocean"],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: "default" }
      }
    },
    border: {
      control: "boolean",
      description: "border change",
      defaultValue: false,
      table: {
        defaultValue: { summary: false }
      },
    },
    round: {
      description: "rounded edges",
      control: "boolean",
      defaultValue: false,
      table: {
        defaultValue: { summary: false }
      },
    },
    lg: {
      description: "bigger",
      control: "boolean",
      defaultValue: false,
      table: {
        defaultValue: { summary: false }
      },
    },
    sm: {
      description: "small",
      control: "boolean",
      defaultValue: false,
      table: {
        defaultValue: { summary: false }
      },
    },
  },

  args: {
    text: "click me",
    border: false,
    round: false,
    lg: false,
    sm: false,
  }
};
export default meta;





type Story = StoryObj<typeof ButtonComponent.Button>;
export const variant_default: Story = (args) => {
  return (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button onClick={action("click button")} variant_btn='default' {...args} />
    </ButtonComponent.ButtonBox>
  )
};
variant_default.args = {};


export const variant_white: Story = (args) => {
  return (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button onClick={action("click button")} variant_btn='white' {...args} />
    </ButtonComponent.ButtonBox>
  )
};
variant_white.args = {};


export const variant_dark: Story = (args) => {
  return (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button onClick={action("click button")} variant_btn='dark' {...args} />
    </ButtonComponent.ButtonBox>
  )
};
variant_dark.args = {};

export const variant_funny: Story = (args) => {
  return (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button onClick={action("click button")} variant_btn='funny' {...args} />
    </ButtonComponent.ButtonBox>
  )
};
variant_funny.args = {};

export const variant_sun: Story = (args) => {
  return (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button onClick={action("click button")} variant_btn='sun' {...args} />
    </ButtonComponent.ButtonBox>
  )
};
variant_sun.args = {};

export const variant_ocean: Story = (args) => {
  return (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button onClick={action("click button")} variant_btn='ocean' {...args} />
    </ButtonComponent.ButtonBox>
  )
};
variant_ocean.args = {};




