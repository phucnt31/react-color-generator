## Introduction

- A novice attempt in trying to apply basic React Form knowledge to build a simple color generator project. This project utilizes the Clipboard API to allow user to copy the color code to the clipboard and React Toastify library to provide a user-friendly experience.

- Color generator: https://react-vite-color-generator.netlify.app/

#### Setup

- npm install
- npm run dev

#### Values.js

Install the values.js library and use it to generate a list of colors in the App component.

[Values.js Library](https://github.com/noeldelgado/values.js/blob/master/README.md)

```sh
npm i values.js

```

```js
import Values from "values.js";
new Values("#f15025").all(10);
```

#### React-Toastify

Import and set up the react-toastify library.

[React Toastify](https://fkhadra.github.io/react-toastify/introduction)

```sh
npm i react-toastify
```

main.jsx

```js
import "react-toastify/dist/ReactToastify.css";
```

App.jsx

```js
import { ToastContainer, toast } from "react-toastify";

toast.success("awesome");
toast.error("error message");

return (
  <main>
    ...............
    <ToastContainer position="top-center" />
  </main>
);
```
