import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { v4 } from 'uuid';
import { maxToastsCount, Positions } from '@constants';
import { IToastApi, IToastConfig } from '@interfaces';
import { toast } from '@service/singleton';
import { ToastBoxPosition, ToastListContainer } from '@types';

export const useToasts = () => {
  const [toasts, setToasts] = useState<IToastConfig[]>([]);
  const [containerPositions, setContainerPositions] = useState<ToastListContainer>([]);
  const ref = useRef<IToastApi>(toast.toastInteraction);

  useEffect(() => {
    toast.toastInteraction = ref.current;
    setContainerPositions(positionOfTheContainer(toasts));
  }, [toasts]);

  const positionOfTheContainer = (toasts: IToastConfig[]): ToastListContainer => {
    const positions: ToastBoxPosition = {
      [Positions.TopRight]: [],
      [Positions.TopLeft]: [],
      [Positions.BottomRight]: [],
      [Positions.BottomLeft]: [],
    };

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
