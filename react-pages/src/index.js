import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from './dashboard';
import HelloDashboard from './helloDashboard';

// Define routes
const routes = [
  { path: "/client/", element: <Dashboard /> },
  { path: "/hello/", element: <HelloDashboard /> },
];

// Create a router with defined routes
const router = createBrowserRouter(routes);

// Use React.createRoot directly
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the app with StrictMode, QueryClientProvider, and RouterProvider
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
