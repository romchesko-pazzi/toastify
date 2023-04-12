import { css } from 'styled-components';
import { delay, SlideDirections } from '@constants';

import {
  fadeAnimationEnd,
  fadeAnimationStart,
  slideAnimationEnd,
  slideAnimationStart,
} from './animationSettings';

export const fadeAnimation = (duration: number) => css`
  animation-name: ${fadeAnimationStart}, ${fadeAnimationEnd};
  ${makeSmoothAnimation(duration)};
`;

export const slideAnimation = (duration: number, direction: SlideDirections) => css`
  animation-name: ${slideAnimationStart(direction)}, ${slideAnimationEnd(direction)};
  ${makeSmoothAnimation(duration)}
`;

const makeSmoothAnimation = (duration: number) => css`
  animation-delay: 0s, ${duration - delay}ms;
  animation-duration: 500ms, 500ms;
  animation-fill-mode: forwards, forwards;
`;
