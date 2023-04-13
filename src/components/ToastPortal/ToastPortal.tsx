import React, { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { v1 } from 'uuid';

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

  return isLoaded ? createPortal(children, document.getElementById(portalId)!) : <div />;
};
