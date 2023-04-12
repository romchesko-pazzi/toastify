import React from 'react';
import { Toast } from '@components/Toast';
import { ToastListBox } from '@components/ToastList/styled';
import { useToasts } from '@hooks/useToasts';

export const ToastList = () => {
  const containerPositions = useToasts();

  return (
    <div>
      {containerPositions.length > 0 &&
        containerPositions.map(([position, toasts]) => {
          return (
            <ToastListBox key={position} position={position}>
              {toasts.map(
                ({
                  position,
                  toastType,
                  animationType,
                  id,
                  backgroundColor,
                  textColor,
                  title,
                  toastDuration,
                }) => {
                  return (
                    <Toast
                      key={id}
                      title={title}
                      toastType={toastType}
                      backgroundColor={backgroundColor}
                      position={position}
                      textColor={textColor}
                      animationType={animationType}
                      toastDuration={toastDuration}
                      id={id}
                    />
                  );
                },
              )}
            </ToastListBox>
          );
        })}
    </div>
  );
};
