import type { Meta, StoryObj} from '@storybook/react';
import Icons from "./Icons";

const meta = {
    title: 'Atoms/Icons',
    component: Icons,
    parameters: {
      layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Icons>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
      name: 'search'
  },
};