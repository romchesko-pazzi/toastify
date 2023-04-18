import { Positions, SlideDirections, ToastsTypes } from '@constants';
import { Animations } from '@types';

export interface IToast {
  title: string;
  description: string;
  backgroundColor: string;
  textColor: string;
  toastType: ToastsTypes;
  position: Positions;
  animationType: Animations;
  toastDuration: number;
  slideDirection: SlideDirections;
  id: string;
}
