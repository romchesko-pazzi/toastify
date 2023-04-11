import { MainToastsColors } from '@constants/mainToastsColors';
import { ToastsTypes } from '@constants/toastsTypes';
import { Animations, Positions } from '@types';

export interface IToasts {
  toastText: string;
  backgroundColor: MainToastsColors;
  textColor: '#FFFFFF' | '#000000';
  toastType: ToastsTypes;
  position: Positions;
  animationType: Animations;
  id?: string;
}
