import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { RouterProvider } from 'react-router-dom';
// import router from './routes';
import ShopContextProvider from './context/ShopContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
  // <React.StrictMode>
  //   <RouterProvider router={router}/>
  // </React.StrictMode>
);
// const root1 = ReactDOM.createRoot(document.getElementById('root1'));
// root1.render(
//   <ShopContextProvider>
//     <App/>
//   </ShopContextProvider>
//   // <React.StrictMode>
//   //   <RouterProvider router={router}/>
//   // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
