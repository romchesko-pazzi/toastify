import { v4 } from 'uuid';
import { Meta, StoryObj } from '@storybook/react';
import { colors } from '@assets';
import { Toast } from '@components/Toast';
import { MainToastsColors, Positions, ToastsTypes } from '@constants';
import { Animations } from '@types';

const commonArgs = {
  position: Positions.TopLeft,
  animationType: 'slide' as Animations,
  toastDuration: 5000,
};

const meta: Meta<typeof Toast> = {
  title: 'Toast',
  component: Toast,
};

type Story = StoryObj<typeof Toast>;

export const Warning: Story = {
  args: {
    title: 'Warning',
    description: 'Warning description',
    id: v4(),
    textColor: colors.black,
    toastType: ToastsTypes.warning,
    backgroundColor: MainToastsColors.yellow,
    ...commonArgs,
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    description: 'Success description',
    id: v4(),
    textColor: colors.white,
    toastType: ToastsTypes.success,
    backgroundColor: MainToastsColors.green,
    ...commonArgs,
  },
};

export const Error: Story = {
  args: {
    title: 'Error',
    description: 'Error description',
    id: v4(),
    textColor: colors.white,
    toastType: ToastsTypes.error,
    backgroundColor: MainToastsColors.red,
    ...commonArgs,
  },
};

export const Info: Story = {
  args: {
    title: 'Info',
    description: 'Info description',
    id: v4(),
    textColor: colors.white,
    toastType: ToastsTypes.info,
    backgroundColor: MainToastsColors.purple,
    ...commonArgs,
  },
};

export default meta;
