import { css, keyframes } from 'styled-components';
import { SlideDirections, slideSpeedAmount } from '@constants';

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

export const slideAnimationStart = (direction: SlideDirections) => keyframes`
  from {
    opacity: 0;
    ${slidePosition(direction, slideSpeedAmount)}
  } 
  to {
    opacity: 1;
    ${slidePosition(direction, 0)}
  }
`;
export const slideAnimationEnd = (direction: SlideDirections) => keyframes`
  from {
    opacity: 1;
    ${slidePosition(direction, 0)}
  }
  to {
    opacity: 0;
    ${slidePosition(direction, slideSpeedAmount)}
  }
`;

const slidePosition = (direction: SlideDirections, animationSpeed: number) => {
  switch (direction) {
    case SlideDirections.top:
      return css`
        transform: translate(0, ${-animationSpeed}rem);
      `;
    case SlideDirections.left:
      return css`
        transform: translate(${-animationSpeed}rem, 0);
      `;
    case SlideDirections.right:
      return css`
        transform: translate(${animationSpeed}rem, 0);
      `;
    case SlideDirections.bottom:
      return css`
        transform: translate(0, ${animationSpeed}rem);
      `;
    default:
      return css``;
  }
};
