import type { Meta, StoryObj} from '@storybook/react';
import Coupon from "./Coupon";
const meta = {
    title: 'Molecules/Coupon',
    component: Coupon,
    tags: ['autodocs'],
} satisfies Meta<typeof Coupon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        id: 2,
        name: "연말정산 중복 할인권",
        rate: 20,
        dueDate: "2023년 11월 31일",
        minimumPayment: 20000,
      },
  };