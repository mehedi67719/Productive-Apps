import React from 'react';
import error from '../../public/assets/error-404.png'

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center gap-10'>
            <img src={error} alt="" />
            <div>
               <h2 className='text-4xl font-bold'>Oops, page not found!</h2>
               <p className='my-10'>The page you are looking for is not available.</p>
               <button className='p-2 text-white font-bold bg-indigo-600'>Go Back!</button>
            </div>
        </div>
    );
};

export default Error;