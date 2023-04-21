import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { v4 } from 'uuid';
import { maxToastsCount } from '@constants';
import { IToastApi, IToastConfig } from '@interfaces';
import { toast } from '@service/toastManager';
import { ToastBoxPosition, ToastListContainer } from '@types';

export const useToasts = () => {
  const [toasts, setToasts] = useState<IToastConfig[]>(toast.getToasts);
  const [containerPositions, setContainerPositions] = useState<ToastListContainer>([]);
  const ref = useRef<IToastApi>(toast.toastInteraction);

  useEffect(() => {
    toast.toastInteraction = ref.current;
    setContainerPositions(containerPosition(toasts));
    toast.setToasts(toasts);
  }, [toasts]);

  const containerPosition = (toasts: IToastConfig[]): ToastListContainer => {
    const positions: ToastBoxPosition = {};

    toasts.forEach(toast => {
      positions[toast.position] = positions[toast.position]
        ? [...positions[toast.position], toast]
        : [toast];
    });

    return Object.entries(positions) as ToastListContainer;
  };

  useImperativeHandle(
    ref,
    () => ({
      addToast: (newToast: IToastConfig) => {
        if (toasts.length < maxToastsCount) {
          const id = v4();

          setToasts([...toasts, { ...newToast, id }]);
          setTimeout(() => {
            ref.current.deleteToast(id);
          }, newToast.toastDuration);
        }
      },
      deleteToast: (id: string) => {
        setToasts(toasts.filter(toast => toast.id !== id));
      },
    }),
    [toasts],
  );

  return containerPositions;
};
