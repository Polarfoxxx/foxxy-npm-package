// List.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';
import { FormComponent } from '../components/Form/components/Form.master';


const meta: Meta<typeof FormComponent.FormHeader> = {
  title: 'FormHeader',
  component: FormComponent.FormHeader,
};

export default meta;
type Story = StoryObj<typeof FormComponent.FormHeader>;
