import React from 'react';
import { v4 } from 'uuid';
import { TestButton } from '@assets';
import { ToastContainer } from '@components/ToastContainer';
import { ToastList } from '@components/ToastList';
import { ToastPortal } from '@components/ToastPortal';
import { SlideDirections } from '@constants';
import { IToast } from '@interfaces';
import { instance } from '@service/singleton';

export default {
  title: 'Test/Toast',
  component: ToastContainer,
  argTypes: {
    title: {
      control: { type: 'text' },
      defaultValue: 'Warning title dummy text',
    },
    description: {
      control: { type: 'text' },
    },
    position: {
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    },
    toastType: {
      control: { type: 'select' },
      defaultValue: 'info',
      options: ['info', 'warning', 'error', 'success'],
    },
    backgroundColor: {
      control: 'color',
    },
    textColor: {
      control: 'color',
    },
    animationType: {
      control: 'radio',
      options: ['fade', 'slide'],
    },
    slideDirection: {
      defaultValue: 'left',
      options: [
        SlideDirections.top,
        SlideDirections.left,
        SlideDirections.right,
        SlideDirections.bottom,
      ],
      control: { type: 'select' },
    },
    toastDuration: {
      control: { type: 'number' },
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
  description,
  slideDirection,
  textColor,
}: IToast) => {
  return (
    <ToastPortal>
      <TestButton
        type="button"
        data-cy="btn-create-toast"
        onClick={() => {
          instance.addToast({
            id: v4(),
            title,
            description,
            position,
            backgroundColor,
            toastType,
            animationType,
            textColor,
            toastDuration,
            slideDirection,
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
