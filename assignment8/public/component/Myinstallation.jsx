import React, { useEffect, useState } from 'react';
import Installdata from './Installdata';

const Myinstallation = () => {

    const [installapp,setinstallapp]=useState([]);


    useEffect(()=>{
        const loaddata=JSON.parse(localStorage.getItem(`installapp`))||[];
        setinstallapp(loaddata)

    },[])


    const cardclick=(id)=>{
        const filtered=installapp.filter(app=>app.id !==id);
        setinstallapp(filtered);
        localStorage.setItem(`installapp`,JSON.stringify(filtered));
    }
    
    return (
        <div className='max-w-[1440px] w-full mx-auto mt-15 '>
            <div className='text-center'>
               <h2 className='text-5xl font-bold mb-4'>Your Installed Apps</h2>
               <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex items-center justify-between'>
                <h3 className='text-2xl font-bold mt-8'>{`${installapp.length} Apps Found`}</h3>
                <button className='bg-gray-500'>sotry by</button>
            </div>
            <div className='mt-10 flex flex-col gap-10'>
                {
                    installapp.map(data=><Installdata data={data} cardclick={cardclick}></Installdata>)
                }
            </div>

        </div>
    );
};

export default Myinstallation;