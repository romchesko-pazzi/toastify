import { MainToastsColors, Positions, SlideDirections } from '@constants';
import { Animations } from '@types';

export interface IToastBoxProps {
  backgroundColor: MainToastsColors;
  textColor: string;
  position: Positions;
  animation: Positions;
  animationType: Animations;
  slideDirection: SlideDirections;
  toastDuration: number;
}
