import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import Allappcard from './Allappcard';
import { CiSearch } from "react-icons/ci";
import apperror from '../assets/App-Error.png'

const Allcard = () => {
    const alldata=useLoaderData();
    const [inputdata,setinputdata]=useState('');
    const allfilter=alldata.filter(app=>app.title.toLowerCase().includes(inputdata.toLowerCase()) || app.companyName.toLowerCase().includes(inputdata.toLocaleLowerCase()));
    // console.log(allfilter)
    return (
        <div className='max-w-[95%] w-full mx-auto'>
            <h2 className='text-4xl font-bold mt-6 mb-2  text-center'>Our All Applications</h2>
            <p className='mb-4 text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className={`flex justify-between ${allfilter.length===0? 'justify-end':''}`}>
                <h2 className={`text-2xl font-bold ${allfilter.length===0? 'hidden':''} `}>({allfilter.length} )Apps Found</h2>
                <div className='flex gap-1 items-center border-2' ><CiSearch />
                <input className='border-none focus:outline-none' value={inputdata} onChange={(e)=>setinputdata(e.target.value)} placeholder='search Apps' type="text" /> 
                </div>
            </div>
             {
                allfilter.length===0? (
                    <div className='flex flex-col justify-center items-center gap-10 text-center'>
                        <img src={apperror} alt="" />
                        <h2 className='text-center text-6xl font-bold'>OPPS!! APP NOT FOUND</h2>
                       <p>The App you are requesting is not found on our system.  please try another apps</p>
                    </div>
                ):
                  <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 '>
                      
                    {
                        allfilter.map(card=><Allappcard card={card} ></Allappcard>)
                    }
                  </div>
             }

        </div>
    );
};

export default Allcard;