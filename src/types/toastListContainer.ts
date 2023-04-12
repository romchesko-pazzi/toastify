import { Positions } from '@constants';
import { IToast } from '@interfaces';

export type ToastListContainer = [[position: Positions, toasts: IToast[]]] | [];
export type ToastBoxPosition = Record<Positions, IToast[]>;
