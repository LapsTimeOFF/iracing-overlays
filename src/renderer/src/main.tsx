import './assets/main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createHashRouter, RouterProvider } from 'react-router';
import Overlay from './Overlay';

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/overlay',
    element: <Overlay />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
