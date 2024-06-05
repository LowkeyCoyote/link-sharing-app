import Router from './Router.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from '@redux/store.ts';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
