import React from 'react';
import { Toast } from '@components/Toast';
import { useToasts } from '@hooks';

import { ToastListBox } from './styled';

export const ToastList = () => {
  const containerPositions = useToasts();

  return (
    <div>
      {containerPositions.length > 0 &&
        containerPositions.map(([position, toasts]) => {
          return (
            <ToastListBox data-cy="toasts-container" key={position} position={position}>
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
                  slideDirection,
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
                      slideDirection={slideDirection}
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
