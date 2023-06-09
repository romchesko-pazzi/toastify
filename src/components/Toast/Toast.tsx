import React from 'react';
import { SvgSelector } from '@components/SvgSelector';
import { IToastConfig } from '@interfaces';
import { toast } from '@service/toastManager';

import {
  CloseButton,
  TextBox,
  ToastBox,
  ToastContent,
  ToastDescription,
  ToastTitle,
} from './styled';

export const Toast = (props: IToastConfig) => {
  const {
    title,
    description,
    toastType,
    textColor,
    backgroundColor,
    position,
    animationType,
    id,
    toastDuration,
    slideDirection,
  } = props;

  const closeToast = (id: string) => () => {
    toast.deleteToast(id);
  };

  return (
    <ToastBox
      data-cy="toast"
      animationType={animationType}
      textColor={textColor}
      position={position}
      animation={position}
      backgroundColor={backgroundColor}
      toastDuration={toastDuration}
      slideDirection={slideDirection}
    >
      <ToastContent>
        <SvgSelector data-cy="svg" id={toastType} />
        <TextBox>
          <ToastTitle data-cy="title">{title}</ToastTitle>
          <ToastDescription data-cy="description">{description}</ToastDescription>
        </TextBox>
      </ToastContent>
      <CloseButton data-cy="close-toast" color={textColor} onClick={closeToast(id!)}>
        <SvgSelector id="close" />
      </CloseButton>
    </ToastBox>
  );
};
