import { MainToastsColors } from '@constants/mainToastsColors';
import { ToastsTypes } from '@constants/toastsTypes';
import { Animations, Positions } from '@types';

export interface IToast {
  title: string;
  description: string;
  backgroundColor: MainToastsColors;
  textColor: '#FFFFFF' | '#000000';
  toastType: ToastsTypes;
  position: Positions;
  animationType: Animations;
  toastDuration: number;
  id: string;
}
