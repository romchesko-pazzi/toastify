import { IToast, IToastApi } from '@interfaces';

class Singleton {
  private static instance: Singleton;

  toastInteraction: IToastApi;

  private constructor() {}

  public static getInstance = (): Singleton => {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  };

  public addToast = (config: IToast) => {
    this.toastInteraction.addToast(config);
  };

  public deleteToast = (id: string) => {
    this.toastInteraction.deleteToast(id);
  };
}

export const instance = Singleton.getInstance();
