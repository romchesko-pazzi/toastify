import { IToastApi, IToastConfig } from '@interfaces';

class ToastManager {
  private static instance: ToastManager;

  private readonly toasts: IToastConfig[] = [];

  toastInteraction: IToastApi;

  private constructor() {
    this.toasts = [];
  }

  public static getInstance = (): ToastManager => {
    if (!ToastManager.instance) {
      ToastManager.instance = new ToastManager();
    }

    return ToastManager.instance;
  };

  public addToast = (config: IToastConfig) => {
    this.toastInteraction.addToast(config);
  };

  public deleteToast = (id: string) => {
    this.toastInteraction.deleteToast(id);
  };

  public getToasts = () => this.toasts;
}

export const toast = ToastManager.getInstance();
