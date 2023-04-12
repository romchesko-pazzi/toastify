import { MainToastsColors, Positions, SlideDirections } from '@constants';
import { Animations } from '@types';

export interface IToastBoxProps {
  backgroundColor: MainToastsColors;
  textColor: '#FFFFFF' | '#000000';
  position: Positions;
  animation: Positions;
  animationType: Animations;
  slideDirection: SlideDirections;
  toastDuration: number;
}
