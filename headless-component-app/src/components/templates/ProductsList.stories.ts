import type { Meta, StoryObj } from "@storybook/react";
import Products from "../../pages/ProductsList";
const meta = {
  title: "Templates/Products",
  component: Products,
  tags: ["autodocs"],
} satisfies Meta<typeof Products>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
