import { IToasts } from '@interfaces/toastConfig';

export interface IToastApi {
  addToast: (config: IToasts) => void;
  hideToast: (id: string) => void;
  deleteToast: (id: string) => void;
}
