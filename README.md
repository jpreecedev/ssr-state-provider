# React SSR with custom state provider

I recently had to help develop a wrapper for React Context API that interacted with state that was shared on the `window`, due to legacy reasons. This project was created to facilitate developing the solution with reduced complexity and increased speed.

## What does this code do?

The stack for this repository is;

- NodeJS with Express for backend (to provide server side rendering)
- EJS view engine, to mimic existing codebase
- ReactDOM for server side and client side rendering of React JS application
- React Router DOM for static and dynamic routing
- React Context API wrapper and higher-order-component which interacts with `window.__GLOBAL_STATE__`
- Webpack for both server side and client side rendering
