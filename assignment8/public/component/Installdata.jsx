import React from 'react';

const Installdata = ({data,cardclick}) => {
    return (
        <div className=' mx-auto flex  items-center w-full p-5 rounded-xl bg-gray-200'>
            <img className='max-w-20 w-full max-h-20 h-full' src={data.image} alt="" />
            <div className='flex justify-between items-center w-full ml-7'>
                <div  >
                  <h2 className='text-2xl my-2 font-bold'>{data.title}</h2>
                  <div className='flex gap-10'>
                      <p className='text-green-500'>{data.downloads}</p>
                      <p className='text-orange-400'>{data.ratingAvg}</p>
                      <p>{data.size} MB</p>
                  </div>
                </div>
                <button onClick={()=>cardclick(data.id)} className='p-2 bg-green-600 font-bold text-white rounded-xl'>Uninstall</button>
            </div>

        </div>
    );
};

export default Installdata;