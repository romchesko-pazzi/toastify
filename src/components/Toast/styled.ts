import styled from 'styled-components';
import { IToastBoxProps } from '@interfaces';
import { fadeAnimation, slideAnimation } from '@utils';

const fontSettings = `
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 31.5rem;
  margin-left: 2rem;
`;

export const ToastBox = styled.div<IToastBoxProps>`
  background: ${({ backgroundColor }) => backgroundColor};
  width: 45rem;
  height: 10rem;
  font-size: 2.2rem;
  color: ${({ textColor }) => textColor};
  border-radius: 2.4rem;
  box-shadow: 0.4rem 0.4rem 0.8rem #00000029;
  display: flex;
  position: relative;

  margin-bottom: 1rem;
  & svg {
    height: 3rem;
    width: 3rem;
    fill: ${({ textColor }) => textColor};
  }
  ${({ toastDuration, animationType, slideDirection }) => {
    return animationType === 'fade'
      ? fadeAnimation(toastDuration)
      : slideAnimation(toastDuration, slideDirection);
  }}
`;

export const ToastContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToastTitle = styled.span`
  ${fontSettings};
  margin-bottom: 1rem;
`;

export const ToastDescription = styled.span`
  ${fontSettings};
  font-size: 1.6rem;
`;

export const CloseButton = styled.button<{ color: string }>`
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  & svg {
    height: 1.5rem;
    width: 1.5rem;
    fill: ${({ color }) => color};
  }
`;
