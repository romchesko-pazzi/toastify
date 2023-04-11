import React from 'react';
import { ToastList } from '@components/ToastList';
import { ToastPortal } from '@components/ToastPortal';

export const ToastContainer = () => {
  return (
    <ToastPortal>
      <ToastList />
    </ToastPortal>
  );
};
