import { IToast } from '@interfaces/toastConfig';

export interface IToastApi {
  addToast: (config: IToast) => void;
  deleteToast: (id: string) => void;
}
