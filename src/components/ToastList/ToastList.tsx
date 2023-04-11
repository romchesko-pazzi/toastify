import React from 'react';
import { Toast } from '@components/Toast';
import { useToasts } from '@hooks/useToasts';

export const ToastList = () => {
  const toasts = useToasts();

  console.log(toasts);

  return (
    <div>
      {toasts.length > 0 &&
        toasts.map(
          ({
            toastText,
            toastType,
            textColor,
            backgroundColor,
            position,
            animationType,
            id,
          }) => (
            <Toast
              key={id}
              id={id}
              toastText={toastText}
              toastType={toastType}
              animationType={animationType}
              textColor={textColor}
              backgroundColor={backgroundColor}
              position={position}
            />
          ),
        )}
    </div>
  );
};
