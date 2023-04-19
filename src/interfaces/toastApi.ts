import { IToastConfig } from '@interfaces';

export interface IToastApi {
  addToast: (config: IToastConfig) => void;
  deleteToast: (id: string) => void;
}
