# Toastify-lib

🎉 Toastify-lib allows you to add notifications to your app with ease

## Installation

```
$ npm install --save toastify-lib
$ yarn add toastify-lib
```

## The gist

```tsx
  import React from 'react';

  import { ToastContainer, toast, IToastConfig } from 'toastify-lib';

  
  const App = () => {
    const createToast = () => {
      toast.addToast({
        position: 'top-right',
        animationType: "fade",
        slideDirection: 'top',
        title: 'Title',
        description: 'Description',
        textColor: '#ffffff',
        toastType: 'info',
        toastDuration: 3000,
        backgroundColor: '#9A40D3',
      } as IToastConfig);
    }

    return (
      <div>
        <button onClick={createToast}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
```
#### If you use TypeScript import **IToastConfig**

## Settings

-   title (title for your notification)
-   description (description for your notification)
-   position (**'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'**)
-   animationType (**'fade' | 'slide'**)
-   slideDirection (**'top' | 'left' | 'right' | 'bottom'**)
-   textColor (color for your notification text)
-   backgroundColor (color for your notification background)
-   toastType (**'info' | 'success' | 'warning' | 'error'**)
-   toastDuration (display duration in ms)
