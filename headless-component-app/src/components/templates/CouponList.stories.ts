import type { Meta, StoryObj } from "@storybook/react";
import CouponList from "../../pages/CouponsList";
const meta = {
  title: "Templates/CouponList",
  component: CouponList,
  tags: ["autodocs"],
} satisfies Meta<typeof CouponList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
