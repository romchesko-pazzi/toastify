import { MainToastsColors, Positions, SlideDirections, ToastsTypes } from '@constants';
import { Animations } from '@types';

export interface IToast {
  title: string;
  description: string;
  backgroundColor: MainToastsColors;
  textColor: '#FFFFFF' | '#000000';
  toastType: ToastsTypes;
  position: Positions;
  animationType: Animations;
  toastDuration: number;
  slideDirection: SlideDirections;
  id: string;
}
