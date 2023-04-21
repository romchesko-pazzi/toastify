import React from 'react';
import { TestButton } from '@assets';
import { ToastContainer } from '@components/ToastContainer';
import { ToastList } from '@components/ToastList';
import { ToastPortal } from '@components/ToastPortal';
import { MainToastsColors, Positions, SlideDirections, ToastsTypes } from '@constants';
import { IToastConfig } from '@interfaces';
import { toast } from '@service/toastManager';

export default {
  title: 'Test/Toast',
  component: ToastContainer,
  args: {
    title: 'Info title dummy text',
    description: 'description text',
    position: Positions.TopLeft,
    toastType: ToastsTypes.info,
    backgroundColor: MainToastsColors.purple,
    textColor: '#ffffff',
    animationType: 'fade',
    toastDuration: 4000,
  },
  argTypes: {
    title: {
      control: { type: 'text' },
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
}: IToastConfig) => {
  return (
    <ToastPortal>
      <TestButton
        type="button"
        data-cy="btn-create-toast"
        onClick={() => {
          toast.addToast({
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
