import type { Meta, StoryObj} from '@storybook/react';
import Typography from "./Typography";

const meta = {
    title: 'Atoms/Typography',
    component: Typography
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'h2'
    },
  };