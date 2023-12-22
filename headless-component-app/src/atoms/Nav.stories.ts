import type { Meta, StoryObj} from '@storybook/react';
import Nav from "./Nav";
const meta = {
    title: 'Atoms/Nav',
    component: Nav,
    tags: ['autodocs'],
} satisfies Meta<typeof Nav>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        user: 'boyeon'
    },
  };