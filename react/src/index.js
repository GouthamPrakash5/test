import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Sidebar from './sidebar';
import YearlyReport from './yearlyReport';
import ClientBooking from './ClientBooking';
import ClientTransaction from './clientTransaction';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <RouterProvider router = {router } />
  </React.StrictMode>
);

reportWebVitals();
