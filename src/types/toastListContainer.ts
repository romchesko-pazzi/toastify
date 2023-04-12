import { IToast } from '@interfaces';

import { Positions } from './positions';

export type ToastListContainer = [[position: Positions, toasts: IToast[]]] | [];
export type ToastBoxPosition = Record<Positions, IToast[]>;
