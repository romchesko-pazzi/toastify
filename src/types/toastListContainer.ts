import { Positions } from '@constants';
import { IToastConfig } from '@interfaces';

export type ToastListContainer = [[position: Positions, toasts: IToastConfig[]]] | [];
export type ToastBoxPosition = Record<Positions, IToastConfig[]>;
