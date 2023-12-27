import type { Meta, StoryObj } from "@storybook/react";
import FlexBox from "./FlexBox";
import Typography from "./Typography";

const meta = {
  title: "Atoms/FlexBox",
  component: FlexBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FlexBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <Typography variant="h4" color="blue1">
          총 상품 금액
        </Typography>
        <Typography variant="h4B" color="blue1">
          135,400원
        </Typography>
      </>
    ),
    justify: "space-between",
    width: '500px'
  },
};
