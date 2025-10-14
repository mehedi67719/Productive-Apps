import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import download from '../assets/icon-downloads.png'
import review from '../assets/icon-review.png'
import rating from '../assets/icon-ratings.png'

const Appdetels = () => {

    const {id}=useParams();
    const alldata=useLoaderData();
    
    const app=alldata.find(item=>item.id===parseInt(id));
    // console.log(app)
    return (
        <div className='max-w-[90%] mx-auto mt-20'>
            <div className='flex'>
                <img src={app.image} alt="" />
                <div className='ml-10 w-full'>
                    <h2 className='text-3xl font-bold mb-4'>{app.title}</h2>
                    <p className='mb-2'>Developed by <span className='text-[#632EE3] font-bold'>{app.companyName}</span></p>
                     <hr className='w-full text-gray-400 ' />

                    <div className='mt-2 flex gap-20'>
                        <div>
                            <img src={download} alt="" />
                           <p className='my-3'>Downloads</p>
                           <h2 className='text-2xl font-bold'>{app.downloads}</h2>
                        </div>


                        <div>
                            <img src={rating} alt="" />
                            <p className='my-3'>Average Ratings</p>
                            <h2 className='text-2xl font-bold'>{app.ratingAvg}</h2>
                        </div>


                        <div>
                            <img src={review} alt="" />
                            <p className='my-3'>Total Reviews</p>
                            <h2 className='text-2xl font-bold'>{app.reviews}</h2>

                        </div>
                    </div>
                    <button className='p-2 bg-green-400 rounded-sm mt-3'>Install Now ({app.size} MB)</button>
                </div>
                
            </div>
            <hr className='w-full my-4 text-gray-400'/>

            <div>
                <h2 className='text-2xl font-bold'>Description</h2>
                <p>{app.description}</p>
            </div>
        </div>
    );
};

export default Appdetels;