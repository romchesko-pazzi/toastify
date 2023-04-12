import React from 'react';
import { SvgSelector } from '@components/SvgSelector';
import { IToast } from '@interfaces';
import { instance } from '@service/singleton';

import { CloseButton, ToastBox, ToastContent, ToastTitle } from './styled';

export const Toast = (props: IToast) => {
  const {
    title,
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
        <ToastTitle>{title}</ToastTitle>
      </ToastContent>
      <CloseButton color={textColor} onClick={closeToast(id)}>
        <SvgSelector id="close" />
      </CloseButton>
    </ToastBox>
  );
};
