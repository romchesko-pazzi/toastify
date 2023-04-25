import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'styled-components';
import { v1 } from 'uuid';
import { GlobalStyle } from '@assets';
import { theme } from '@assets/theme';
import { ErrorFallback } from '@components/ErrorBoundary';

export const ToastPortal = ({ children }: { children: ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [portalId] = useState(`toast-portal-${v1()}`);

  useEffect(() => {
    const toastDiv = document.createElement('div');

    toastDiv.id = portalId;
    document.body.prepend(toastDiv);
    setIsLoaded(true);

    return () => {
      document.body.removeChild(toastDiv);
    };
  }, [portalId]);

  return isLoaded ? (
    createPortal(
      <ThemeProvider theme={theme}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <GlobalStyle />
          {children}
        </ErrorBoundary>
      </ThemeProvider>,
      document.getElementById(portalId)!,
    )
  ) : (
    <div />
  );
};
