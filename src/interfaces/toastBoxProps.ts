import { MainToastsColors } from '@constants/mainToastsColors';
import { Animations, Positions } from '@types';

export interface IToastBoxProps {
  backgroundColor: MainToastsColors;
  textColor: '#FFFFFF' | '#000000';
  position: Positions;
  animation: Positions;
  animationType: Animations;
  toastDuration: number;
}
