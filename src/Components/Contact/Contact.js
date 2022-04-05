import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='bg-gray-200 h-[60vh] flex flex-col justify-center items-center pt-10 '>
            <h1 className='text-4xl font-mono '>Contact Us, Our Office Address Down Below</h1>
             <div className='flex justify-content items-center py-3'>
                 <Link className='bg-cyan-500 px-8 py-3 shadow-lg rounded-2xl mr-3' to='bd-address'>BD Address</Link>
                 <Link  className='bg-cyan-500 px-8 py-3 shadow-lg rounded-2xl' to='us-address'>US Address</Link>
             </div>
             <div className=' flex justify-center items-center py-50 w-full'>
                 <Outlet/>
             </div>
        </div>
    );
};

export default Contact;