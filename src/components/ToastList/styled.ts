import styled from 'styled-components';
import { Positions } from '@types';
import { getPosition } from '@utils';

export const ToastListBox = styled.div<{ position: Positions }>`
  position: fixed;
  display: flex;
  flex-direction: column;
  ${({ position }) => getPosition(position)}
`;
