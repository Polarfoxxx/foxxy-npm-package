import type { Meta, StoryObj } from '@storybook/react';
import { ButtonComponent } from '../components/Button/components/Button.master';



const meta: Meta<typeof ButtonComponent.Button> = {
  title: 'Example/Button',
  component: ButtonComponent.Button,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: "text",
    },
  },

  args: {
    variant: "default",
    text: "click Me",
    border: false,
    round: false,
    lg: false,
    sm: false,
  }
};
export default meta;


type Story = StoryObj<typeof ButtonComponent.Button>;

export const variant_default: Story = {
  args: {
    variant: "default"
  },
  argTypes: {
    border: {
      control: "boolean"
    },
    round: {
      control: "boolean"
    },
    lg: {
      control: "boolean"
    },
    sm: {
      control: "boolean"
    },
  }
};

export const variant_white: Story = {
  args: {
    variant: "white"
  },
  argTypes: {
    border: {
      control: "boolean"
    },
    round: {
      control: "boolean"
    },
    lg: {
      control: "boolean"
    },
    sm: {
      control: "boolean"
    },
  }
};


export const variant_dark: Story = {
  args: {
    variant: "dark"
  },
  argTypes: {
    border: {
      control: "boolean"
    },
    round: {
      control: "boolean"
    },
    lg: {
      control: "boolean"
    },
    sm: {
      control: "boolean"
    },
  }
};


export const variant_funny: Story = {
  args: {
    variant: "funny"
  },
  argTypes: {
    border: {
      control: "boolean"
    },
    round: {
      control: "boolean"
    },
    lg: {
      control: "boolean"
    },
    sm: {
      control: "boolean"
    },
  }
};

export const variant_sun: Story = {
  args: {
    variant: "sun"
  },
  argTypes: {
    border: {
      control: "boolean"
    },
    round: {
      control: "boolean"
    },
    lg: {
      control: "boolean"
    },
    sm: {
      control: "boolean"
    },
  }
};


export const variant_ocean: Story = {
  args: {
    variant: "ocean"
  },
  argTypes: {
    border: {
      control: "boolean"
    },
    round: {
      control: "boolean"
    },
    lg: {
      control: "boolean"
    },
    sm: {
      control: "boolean"
    },
  }
};