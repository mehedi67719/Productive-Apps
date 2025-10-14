import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router';
import Card from './Card';




const Home = () => {
    const data=useLoaderData();
    


    return (
        <div >
            <Banner></Banner>
           <div className='text-center'>
                <h2 className='text-4xl font-bold mt-5 mb-2'>Trending Apps</h2>
                <p className='mb-4'>Explore All Trending Apps on the Market developed by us</p>


                 <div className='grid grid-cols-4 gap-8 max-w-[95%] mx-auto '>
                 {
                    data.map(card=><Card card={card}></Card>)
                    }
                </div>
           </div>
           <Link to='/allcard'><button className='block mt-10 mx-auto max-w-[200px] py-1.5 px-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-bold '>Show All</button></Link>
        </div>
    );
};

export default Home;