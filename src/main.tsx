import Router from './Router.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { store } from '@redux/store.ts';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <DndProvider backend={window.innerWidth <= 1024 ? TouchBackend : HTML5Backend}>
        <Router />
      </DndProvider>
    </Provider>
    <ToastContainer position="bottom-right" />
  </React.StrictMode>
);
