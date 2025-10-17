import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, Link } from 'react-router';
import download from '../assets/icon-downloads.png';
import review from '../assets/icon-review.png';
import rating from '../assets/icon-ratings.png';
import {  toast } from 'react-toastify';
import apperror from '../assets/App-Error.png'
import Chart from './Chart';


const Appdetels = () => {
  const { id } = useParams();
  const alldata = useLoaderData();

  const [install, setInstall] = useState(false);

  if (!alldata) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p>Loading...</p>
      </div>
    );
  }


  const app = alldata.find(item => item.id.toString() === id);

  if (!app) {
   
    return (
      <div className='flex flex-col justify-center items-center gap-10 text-center mt-20'>
                            
                            
        <div className='flex flex-col justify-center items-center gap-10 text-center'>
                                         
            <img src={apperror} alt="" />               
                            
            <h2 className='text-center text-6xl font-bold'>OPPS!! APP NOT FOUND</h2>
                                            
           <p>The App you are requesting is not found on our system.  please try another apps</p>                    
                            
        </div>
        <p>
          The app you are looking for does not exist. Please check the URL or go back to{' '}
          <Link to="/allcard" className='text-blue-500 underline'>
            All Apps
          </Link>
          .
        </p>
      </div>
    );
  }

  useEffect(() => {
    const savedApps = JSON.parse(localStorage.getItem('installapp')) || [];
    const isInstalled = savedApps.find(item => item.id === app.id);
    if (isInstalled) setInstall(true);
  }, [app.id]);

  const handleClick = () => {
    setInstall(true);
    const saveApp = JSON.parse(localStorage.getItem('installapp')) || [];
    const checkItem = saveApp.find(item => item.id === app.id);

    toast.success(`${app.title} has been installed!`);

    if (!checkItem) {
      saveApp.push(app);
      localStorage.setItem('installapp', JSON.stringify(saveApp));
    }
  };

  return (
    <div className='max-w-[90%] mx-auto mt-20'>
      <div className='flex flex-col lg:flex-row gap-10'>
        <img src={app.image} alt={app.title} className='w-full lg:w-1/2 h-auto rounded-xl' />
        <div className='lg:ml-10 w-full'>
          <h2 className='text-3xl font-bold mb-4'>{app.title}</h2>
          <p className='mb-2'>
            Developed by <span className='text-[#632EE3] font-bold'>{app.companyName}</span>
          </p>
          <hr className='w-full text-gray-400 mb-4' />

          <div className='flex gap-10'>
            <div className='text-center'>
              <img src={download} alt="Downloads" className='mx-auto' />
              <p className='my-2'>Downloads</p>
              <h2 className='text-2xl font-bold'>{app.downloads}</h2>
            </div>

            <div className='text-center'>
              <img src={rating} alt="Ratings" className='mx-auto' />
              <p className='my-2'>Average Rating</p>
              <h2 className='text-2xl font-bold'>{app.ratingAvg}</h2>
            </div>

            <div className='text-center'>
              <img src={review} alt="Reviews" className='mx-auto' />
              <p className='my-2'>Total Reviews</p>
              <h2 className='text-2xl font-bold'>{app.reviews}</h2>
            </div>
          </div>

          <button
            onClick={handleClick}
            disabled={install}
            className={`mt-5 px-4 py-2 font-bold rounded ${install ? 'bg-gray-400' : 'bg-green-500 text-white'}`}
          >
            {install ? 'Installed' : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <hr className='my-6 text-gray-400' />



       <Chart app={app}></Chart>


       
      <div>
        <h2 className='text-2xl font-bold mb-2'>Description</h2>
        <p>{app.description}</p>
      </div>

      
    </div>
  );
};

export default Appdetels;
