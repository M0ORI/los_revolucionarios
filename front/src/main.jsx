import React, {useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Menu from './components/Menu/Menu.jsx';

const RedirectToAdmin = () => {
  React.useEffect(() => {
    window.location.href = 'https://los-revolucionarios-back.onrender.com/admin/';
  }, []);
  return null; 
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: '/menu',
    element: <Menu/>
  },
  {
    path: '/admin',
    element: <RedirectToAdmin/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
