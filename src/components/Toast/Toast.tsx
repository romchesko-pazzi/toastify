import React from 'react';
import { SvgSelector } from '@components/SvgSelector';
import { IToast } from '@interfaces';
import { instance } from '@service/singleton';

import {
  CloseButton,
  TextBox,
  ToastBox,
  ToastContent,
  ToastDescription,
  ToastTitle,
} from './styled';

export const Toast = (props: IToast) => {
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
  } = props;

  const closeToast = (id: string) => () => {
    instance.deleteToast(id);
  };

  return (
    <ToastBox
      animationType={animationType}
      textColor={textColor}
      position={position}
      animation={position}
      backgroundColor={backgroundColor}
      toastDuration={toastDuration}
    >
      <ToastContent>
        <SvgSelector id={toastType} />
        <TextBox>
          <ToastTitle>{title}</ToastTitle>
          <ToastDescription>{description}</ToastDescription>
        </TextBox>
      </ToastContent>
      <CloseButton color={textColor} onClick={closeToast(id)}>
        <SvgSelector id="close" />
      </CloseButton>
    </ToastBox>
  );
};
