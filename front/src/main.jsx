import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Menu from './components/Menu/Menu.jsx';
import './assets/styles.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: '/menu',
    element: <Menu/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
