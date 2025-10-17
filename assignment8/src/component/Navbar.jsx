import React from 'react';
import navlogo from '../assets/logo.png'
import { FaGithub } from "react-icons/fa";
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='px-16 py-4 flex flex-col lg:flex-row lg:justify-between gap-3 lg:items-center bg-[#E9E9E9]'>
         
         <NavLink to='/'>
            <div className='flex justify-center lg:justify-normal items-center'>
                <img className='w-10' src={navlogo} alt="" />
                <h2 className='text-2xl font-bold'>HERO.IO</h2>
            </div>
         </NavLink>

         <div className='flex justify-center lg:justify-normal list-none gap-10'>
            <NavLink 
                to='/' 
                className={({ isActive }) => isActive ? 'underline font-bold' : ''}>
                Home
            </NavLink>

            <NavLink 
                to='/allcard' 
                className={({ isActive }) => isActive ? 'underline font-bold' : ''}>
                Apps
            </NavLink>

            <NavLink 
                to='/installapp' 
                className={({ isActive }) => isActive ? 'underline font-bold' : ''}>
                Installation
            </NavLink>
         </div>

         <button className='font-bold max-w-[150px] mx-auto lg:mx-0 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-2'>
            <a className='flex gap-1 items-center' href="https://github.com/mehedi67719">
                <FaGithub /> Contribute
            </a>
         </button>
        </div>
    );
};

export default Navbar;
