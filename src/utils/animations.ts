import { css } from 'styled-components';
import { delayForFade } from '@constants';
import { fadeAnimationEnd, fadeAnimationStart } from '@constants/animationsKeyframes';

export const opacityAnimation = (duration: number) => css`
  animation-name: ${fadeAnimationStart}, ${fadeAnimationEnd};
  ${makeSmoothFadeAnimation(duration)}
`;

export const makeSmoothFadeAnimation = (duration: number) => css`
  animation-delay: 0s, ${duration - delayForFade}ms;
  animation-duration: 500ms, 500ms;
  animation-fill-mode: forwards, forwards;
`;
