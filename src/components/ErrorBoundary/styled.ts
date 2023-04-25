import styled from 'styled-components';
import { center } from '@constants';

export const ErrorWrapper = styled.div`
  ${center}
`;

export const ErrorText = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.big}rem;
  letter-spacing: ${({ theme }) => theme.letterSpacing}px;
  margin-bottom: ${({ theme }) => theme.margin.marginBottom.medium}rem;
`;
