import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from '../public/component/Root.jsx';
import Home from '../public/component/Home.jsx';
import Allcard from '../public/component/Allcard.jsx';
import Appdetels from '../public/component/Appdetels.jsx';
import Myinstallation from '../public/component/Myinstallation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
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
  </StrictMode>,
)
