import { IToast, IToastApi } from '@interfaces';

class ToastManager {
  private static instance: ToastManager;

  toastInteraction: IToastApi;

  private constructor() {}

  public static getInstance = (): ToastManager => {
    if (!ToastManager.instance) {
      ToastManager.instance = new ToastManager();
    }

    return ToastManager.instance;
  };

  public addToast = (config: IToast) => {
    this.toastInteraction.addToast(config);
  };

  public deleteToast = (id: string) => {
    this.toastInteraction.deleteToast(id);
  };
}

export const toast = ToastManager.getInstance();
