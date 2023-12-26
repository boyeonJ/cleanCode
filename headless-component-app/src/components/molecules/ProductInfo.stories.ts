import type { Meta, StoryObj } from "@storybook/react";
import ProductInfo from "./ProductInfo";

const meta = {
  title: "Molecules/ProductInfo",
  component: ProductInfo,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ProductInfo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 5,
    brand: "LG전자",
    name: "비스포크 WF24B9600KE+DV20B9760CE 오토오픈도어",
    price: 2242719,
    rate: 7,
    review: 22,
    img: "/public/product01.jpg",
  },
};
