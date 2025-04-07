import './assets/main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createHashRouter, RouterProvider } from 'react-router';
import Overlay from './Overlay';
import OverlayFlip from './Flip';

const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/overlay-ivy',
    element: <Overlay />
  },
  {
    path: '/overlay-flip',
    element: <OverlayFlip />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
