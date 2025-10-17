import React, { useEffect, useState } from 'react';
import Installdata from './Installdata';

import { ToastContainer, toast } from 'react-toastify';

const Myinstallation = () => {

    const [installapp,setinstallapp]=useState([]);

    
    useEffect(()=>{
        const loaddata=JSON.parse(localStorage.getItem(`installapp`))||[];
        setinstallapp(loaddata)

    },[])
      

    const [sortOrder, setSortOrder] = useState('');



     const handleSort = (order) => {
        setSortOrder(order);
        let sorted = [...installapp];
        if (order === 'high') {
            sorted.sort((x, y) => y.downloads - x.downloads);
        } else if (order === 'low') {
            sorted.sort((x, y) => x.downloads - y.downloads);
        }
        setinstallapp(sorted);
    }


    const cardclick=(id)=>{
        const filtered=installapp.filter(app=>app.id !==id);
        setinstallapp(filtered);
        localStorage.setItem(`installapp`,JSON.stringify(filtered));
        toast("Wow so easy!");

    }
    
    return (
        <div className='max-w-[1440px] w-full mx-auto mt-15 '>
            <div className='text-center'>
               <h2 className='text-5xl font-bold mb-4'>Your Installed Apps</h2>
               <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-3 lg:gap-0 items-center justify-between'>
                <h3 className='text-2xl font-bold mt-8'>{`${installapp.length} Apps Found`}</h3>
                
               <div>
                    <label className='mr-2 font-semibold'>Sort by Downloads:</label>
                    <select
                        value={sortOrder}
                        onChange={(e) => handleSort(e.target.value)}
                        className='border border-gray-400 px-3 py-1 rounded'
                    >
                        <option value="">Select</option>
                        <option value="high">High → Low</option>
                        <option value="low">Low → High</option>
                    </select>
                </div>



            </div>
            <div className='mt-10 flex flex-col gap-10'>
                {
                    installapp.map(data=><Installdata key={data.id} data={data} cardclick={cardclick}></Installdata>)
                }
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Myinstallation;