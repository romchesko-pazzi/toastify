import React from 'react';
import { v4 } from 'uuid';
import { TestButton } from '@assets';
import { ToastContainer } from '@components/ToastContainer';
import { ToastList } from '@components/ToastList';
import { ToastPortal } from '@components/ToastPortal';
import { IToast } from '@interfaces';
import { instance } from '@service/singleton';

export default {
  title: 'Template',
  component: ToastContainer,
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'Warning title dummy text',
    },
    position: {
      control: { type: 'select' },
      options: [
        'top-left',
        'top-right',
        'bottom-left',
        'bottom-right',
        'bottom-center',
        'top-center',
      ],
    },
    toastType: {
      control: { type: 'select' },
      defaultValue: 'info',
      options: ['info', 'warning', 'error', 'success'],
    },
    backgroundColor: {
      control: 'color',
    },
    animationType: {
      control: 'radio',
      options: ['fade', 'slide'],
    },
    toastDuration: {
      control: { type: 'number' },
      defaultValue: 3000,
    },
  },
};

const Template = ({
  position,
  toastType,
  title,
  backgroundColor,
  animationType,
  toastDuration,
}: IToast) => {
  return (
    <ToastPortal>
      <TestButton
        type="button"
        onClick={() => {
          instance.addToast({
            id: v4(),
            title,
            position,
            backgroundColor,
            toastType,
            animationType,
            textColor: '#FFFFFF',
            toastDuration,
          });
        }}
      >
        Add toast
      </TestButton>
      <ToastList />
    </ToastPortal>
  );
};

export const TestToast = Template.bind({});
