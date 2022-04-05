import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='flex flex-col justify-center h-[80vh] items-center bg-slate-400'>
            <h1 className='text-4xl font-mono font-bold'>
                Welcome to CRYPTO  CAFE <i className="fa-solid fa-mug-hot"></i>

            </h1>
            <Link to='./coins' className='bg-cyan-400 text-white px-5 py-3 mt-3 rounded-lg'>
                Explore Coins
            </Link>
        </div>
    );
};

export default Home;