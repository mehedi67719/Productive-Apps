import React from 'react';
import Navbar from './Navbar';
import { Outlet, useNavigation, useRouteError } from 'react-router';
import Footer from './Footer';
import Error from './Error';
import loaderimg from  '../assets/logo.png'


   const Root=()=>{
      const error=useRouteError();
      const navigation=useNavigation();
      const loading=navigation.state==='loading';

 
    return (

        
        <div>
            <Navbar></Navbar>
            {
             error?<Error></Error>:
             loading?(<div className='flex justify-center items-center h-screen'>
                         <img className='w-20 h-20 animate-spin' src={loaderimg} alt="Loading..." />
                     </div>) 
                     
            :<Outlet></Outlet>
            }
            <Footer></Footer>
        </div>
    );
}

export default Root;