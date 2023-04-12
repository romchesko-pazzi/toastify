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
                  title,
                  description,
                  position,
                  toastType,
                  animationType,
                  id,
                  backgroundColor,
                  textColor,
                  toastDuration,
                }) => {
                  return (
                    <Toast
                      key={id}
                      title={title}
                      description={description}
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
