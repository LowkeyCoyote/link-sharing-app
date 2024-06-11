import Router from './Router.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from '@redux/store.ts';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider backend={HTML5Backend}>
        <Router />
      </DndProvider>
    </Provider>
    <ToastContainer />
  </React.StrictMode>
);
