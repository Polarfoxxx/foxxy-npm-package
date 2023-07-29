import { Meta, StoryObj } from "@storybook/react";
import { OffCanvasComponent } from "../components/OffCanvas/components/OffCanvas.master";
import { ButtonComponent } from "../components/Button/components/Button.master";
declare const meta: Meta;
export default meta;
type Story = StoryObj<typeof OffCanvasComponent.OffCanvas | typeof ButtonComponent.Button>;
export declare const variant_OffCanvas: Story;
