import { MainToastsColors } from '@constants/mainToastsColors';
import { IToastPosition } from '@interfaces';
import { Animations } from '@types';

export interface IToastBoxProps {
  background: MainToastsColors;
  textColor: '#FFFFFF' | '#000000';
  position: IToastPosition;
  animation: IToastPosition;
  animationType: Animations;
}
