import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <div className='font-mono'>
                <h1 className='text-[200px] font-extrabold text-cyan-500'>404</h1>
                <p> OPPS! PAGE NOT FOUND </p>
                <p>Sorry, the page you're looking for doesn't exist.</p>
            </div>
             <div className='mt-5'>
              <Link className='bg-orange-500 px-5 py-3 mt-5 text-white rounded-2xl shadow-lg' to='/' >RETURN HOME</Link>
             </div>
        </div>
    );
};

export default NotFound;