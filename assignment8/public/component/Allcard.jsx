import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Allappcard from './Allappcard';
import { CiSearch } from "react-icons/ci";

const Allcard = () => {
    const alldata=useLoaderData();
    const [inputdata,setinputdata]=useState('');
    const allfilter=alldata.filter(app=>app.title.toLowerCase().includes(inputdata.toLowerCase()) || app.companyName.toLowerCase().includes(inputdata.toLocaleLowerCase()));
    console.log(allfilter)
    return (
        <div className='max-w-[95%] w-full mx-auto'>
            <h2 className='text-4xl font-bold mt-6 mb-2  text-center'>Our All Applications</h2>
            <p className='mb-4 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold'>({allfilter.length} )Apps Found</h2>
                <div className='flex gap-1 items-center border-2'><CiSearch />
                <input className='border-none focus:outline-none' value={inputdata} onChange={(e)=>setinputdata(e.target.value)} placeholder='search Apps' type="text" /> 
                </div>
            </div>

            <div className='grid grid-cols-4 gap-8 '>
                
              {
                  allfilter.map(card=><Allappcard card={card} ></Allappcard>)
              }
            </div>
        </div>
    );
};

export default Allcard;