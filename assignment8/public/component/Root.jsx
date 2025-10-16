import React from 'react';
import Navbar from './Navbar';
import { Outlet, useRouteError } from 'react-router';
import Footer from './Footer';
import Error from './Error';


   const Root=()=>{
      const error=useRouteError();

 
    return (

        
        <div>
            <Navbar></Navbar>
            {
             error?<Error></Error>:<Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
}

export default Root;