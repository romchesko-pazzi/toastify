# Toastify-lib

🎉 Toastify-lib allows you to add notifications to your app with ease

## Installation

```
$ npm install --save toastify-lib
$ yarn add toastify-lib
```

## The gist

```jsx
  import React from 'react';

  import { ToastContainer, toast } from 'toastify-lib';

  
  function App(){
    const notify = () => toast("Wow so easy!");

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
      </div>
    );
  }
```
