import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { maxToastsCount, Positions } from '@constants';
import { IToast, IToastApi } from '@interfaces';
import { toast } from '@service/singleton';
import { ToastBoxPosition, ToastListContainer } from '@types';

export const useToasts = () => {
  const [toasts, setToasts] = useState<IToast[]>([]);
  const [containerPositions, setContainerPositions] = useState<ToastListContainer>([]);
  const ref = useRef<IToastApi>(toast.toastInteraction);

  useEffect(() => {
    toast.toastInteraction = ref.current;
    setContainerPositions(positionOfTheContainer(toasts));
  }, [toasts]);

  const positionOfTheContainer = (toasts: IToast[]): ToastListContainer => {
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
      addToast: (newToast: IToast) => {
        if (toasts.length < maxToastsCount) {
          setToasts([...toasts, newToast]);
          setTimeout(() => {
            ref.current.deleteToast(newToast.id);
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
