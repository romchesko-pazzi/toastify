import { Positions, SlideDirections, ToastsTypes } from '@constants';
import { Animations } from '@types';

export interface IToastBase {
  backgroundColor: string;
  textColor: string;
  position: Positions;
  animationType: Animations;
  slideDirection: SlideDirections;
  toastDuration: number;
}

export interface IToastBoxProps extends IToastBase {
  animation: Positions;
}

export interface IToastConfig extends IToastBase {
  title: string;
  description: string;
  toastType: ToastsTypes;
  id?: string;
}
