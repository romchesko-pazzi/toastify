import { useEffect, useImperativeHandle, useRef, useState } from 'react';
import { maxToastsCount } from '@constants';
import { IToastApi, IToasts } from '@interfaces';
import { instance } from '@utils/singleton';

export const useToasts = () => {
  const [toasts, setToasts] = useState<IToasts[]>([]);
  const ref = useRef<IToastApi>();

  useEffect(() => {
    instance.toasts = ref.current;
  }, [toasts]);

  useImperativeHandle(
    ref,
    () => ({
      addToast: (config: IToasts) => {
        if (toasts.length < maxToastsCount) {
          setToasts([...toasts, config]);
        }
      },
      hideToast: (id: string) => {},
      deleteToast: (id: string) => {
        setToasts(toasts.filter(toast => toast.id !== id));
      },
    }),
    [toasts],
  );

  return toasts;
};
