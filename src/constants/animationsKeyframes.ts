import { keyframes } from 'styled-components';

export const fadeAnimationStart = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const fadeAnimationEnd = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }`;
