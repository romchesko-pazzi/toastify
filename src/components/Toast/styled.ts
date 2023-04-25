import styled, { css } from 'styled-components';
import { IToastBoxProps } from '@interfaces';
import { fadeAnimation, slideAnimation } from '@utils';

const fontSettings = css`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-left: ${({ theme }) => theme.margin.marginLeft.small}rem;
`;

export const ToastBox = styled.div<IToastBoxProps>`
  background: ${({ backgroundColor }) => backgroundColor};
  width: ${({ theme }) => theme.width}rem;
  height: ${({ theme }) => theme.height}rem;
  font-size: ${({ theme }) => theme.fontSize.medium}rem;
  color: ${({ textColor }) => textColor};
  border-radius: ${({ theme }) => theme.borderRadius}rem;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  position: relative;

  margin-bottom: ${({ theme }) => theme.margin.marginBottom.small}rem;
  & svg {
    height: ${({ theme }) => theme.svgSizes.medium.height}rem;
    width: ${({ theme }) => theme.svgSizes.medium.width}rem;
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
  margin-left: ${({ theme }) => theme.margin.marginLeft.small}rem;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToastTitle = styled.span`
  ${fontSettings};
  margin-bottom: ${({ theme }) => theme.margin.marginBottom.small}rem;
`;

export const ToastDescription = styled.span`
  ${fontSettings};
  font-size: ${({ theme }) => theme.fontSize.small}rem;
`;

export const CloseButton = styled.button<{ color: string }>`
  position: absolute;
  top: ${({ theme }) => theme.position.top}rem;
  right: ${({ theme }) => theme.position.right}rem;
  cursor: pointer;
  & svg {
    height: ${({ theme }) => theme.svgSizes.small.height}rem;
    width: ${({ theme }) => theme.svgSizes.small.width}rem;
    fill: ${({ color }) => color};
  }
`;
