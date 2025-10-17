import React from 'react';
import download from '../assets/icon-downloads.png'
import rating from '../assets/icon-ratings.png'
import { Link } from 'react-router';

const Card = ({card}) => {
    return (
      <Link to={`/appdetels/${card.id}`}>
        <div className='bg-white p-8 rounded-xl shadow-2xl mt-7'>
            <img className='w-[400px] w-full h-[300px] rounded-xl ' src={card.image} alt="" />
            <h2 className='text-left text-3xl font-bold my-3'>{card.title}</h2>

            <div className='flex justify-between'>
                <div className='bg-gray-300 p-2.5 rounded-md flex items-center'><img className='w-4.5 h-4.5'  src={download} alt="" /> <p>{card.downloads}</p></div>
                <div className='bg-[#FFF0E1] p-2.5 flex items-center rounded-md '><img className='h-4.5 w-4.5' src={rating} alt="" /> <p>{card.ratingAvg}</p></div>

            </div>
        </div>
      </Link>
    );
};

export default Card;