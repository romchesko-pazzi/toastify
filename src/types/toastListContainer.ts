import { Positions } from '@constants';
import { IToastConfig } from '@interfaces';

export type ToastListContainer = [[position: Positions, toasts: IToastConfig[]]] | [];
export type ToastBoxPosition = {
  [key: string]: IToastConfig[];
};
