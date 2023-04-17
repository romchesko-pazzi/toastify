import React from 'react';
import { Close, Error, Info, Success, Warning } from '@assets/svg';

export const SvgSelector = ({ id }: { id: string }) => {
  switch (id) {
    case 'close':
      return <Close />;
    case 'info':
      return <Info />;
    case 'warning':
      return <Warning />;
    case 'error':
      return <Error />;
    case 'success':
      return <Success />;
    default:
      return <svg />;
  }
};
