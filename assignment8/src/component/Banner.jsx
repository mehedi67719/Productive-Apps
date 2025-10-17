import React from 'react';
import bannerimage from '../assets/hero.png'
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa6";

const Banner = () => {
    return (
        <div >
           <div className=' flex flex-col max-w-6xl mx-auto justify-center gap-10 mx-1'>
                <div className='text-center'>
                   <h2 className='text-6xl font-bold my-8'>We Build <br /> <span className='text-[#632EE3]'>Productive</span> Apps</h2>
                   <p>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to <br /> turn your ideas into digital experiences that truly make an impact.</p>
                </div>
    
                <div className='flex justify-center'>
                    <a href="https://play.google.com/store/games?hl=en&pli=1"><button className='font-bold p-2.5 border-2 mx-3 flex items-center gap-1'> <FaGooglePlay /> Google Play</button></a>
                    <a href="https://apps.microsoft.com/home?hl=en-US&gl=BD"><button className='font-bold p-2.5 border-2 mx-3 flex items-center  gap-1'> <FaAppStoreIos /> App Store</button></a>
                </div>
                <img src={bannerimage} alt="" />
           </div>

           <div className='p-10 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-center  text-white'>
            <h2 className='text-4xl font-bold'>Trusted by Millions, Built for You</h2>

            <div className='flex flex-col lg:flex-row justify-around my-10'>
                <div >
                    <p>Total Downloads</p>
                    <h2 className='text-5xl my-2.5 font-bold'>29.6M</h2>
                    <p>21% more than last month</p>
                </div>
                <div>
                    <p>Total Reviews</p>
                    <h2 className='text-5xl my-2.5 font-bold'>906K</h2>
                    <p>46% more than last month</p>
                </div>
                <div>
                    <p>Active Apps</p>
                    <h2 className='text-5xl my-2.5 font-bold'>132+</h2>
                    <p>31 more will Launch</p>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Banner;