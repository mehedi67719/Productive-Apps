import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './component/Root.jsx';
import Home from './component/Home.jsx';
import Allcard from './component/Allcard.jsx';
import Appdetels from './component/Appdetels.jsx';
import Myinstallation from './component/Myinstallation.jsx';
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Root></Root>,
    children:[
        {
          index:true,
          path:'/',
          Component:Home,
          loader:()=>fetch('/data.json').then(res=>res.json())
        },
        {
          path:'/allcard',
          Component:Allcard,
          loader:()=>fetch('/alldata.json').then(res=>res.json())
        },
        {
          path:'/appdetels/:id',
          Component:Appdetels,
          loader:()=>fetch('/alldata.json').then(res=>res.json())
        },
        {
          path:'/installapp',
          Component:Myinstallation,
        }
    ]
  }

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
     <ToastContainer />
  </StrictMode>,
)
