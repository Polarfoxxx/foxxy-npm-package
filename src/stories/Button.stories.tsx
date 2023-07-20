import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from '../components/Button/components/Button.master';
import React from 'react';


const meta: Meta = {
  title: 'Example/Button',
  component: ButtonComponent.Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: "text",
      description: "text in button",
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
    onClick: {
      action: "clicked"
    }
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

export const variant_default: Story = {
  render: (args) => (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button variant_btn='default' {...args} />
    </ButtonComponent.ButtonBox>
  )
};

export const variant_white: Story = {
  render: (args) => (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button variant_btn='white' {...args} />
    </ButtonComponent.ButtonBox>
  )
};

export const variant_dark: Story = {
  render: (args) => (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button variant_btn='dark' {...args} />
    </ButtonComponent.ButtonBox>
  )
};

export const variant_funny: Story = {
  render: (args) => (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button variant_btn='funny' {...args} />
    </ButtonComponent.ButtonBox>
  )
};

export const variant_sun: Story = {
  render: (args) => (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button variant_btn='sun' {...args} />
    </ButtonComponent.ButtonBox>
  )
};

export const variant_ocean: Story = {
  render: (args) => (
    <ButtonComponent.ButtonBox>
      <ButtonComponent.Button variant_btn='ocean' {...args} />
    </ButtonComponent.ButtonBox>
  )
};



