import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallback } from '@components/ErrorBoundary';
import { ToastList } from '@components/ToastList';
import { ToastPortal } from '@components/ToastPortal';

export const ToastContainer = () => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ToastPortal>
        <ToastList />
      </ToastPortal>
    </ErrorBoundary>
  );
};
