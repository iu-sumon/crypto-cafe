import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
    return (
        <header className='flex justify-center md:justify-between items-center sticky px-20 py-8 text-2xl font-bold font-mono bg-white'>
            <div className='hidden md:block text-3xl'>
                <Link to='./' >Crypto Cafe</Link>
            </div>
            <nav className='flex gap-4 text-xl font-mono'>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/coins'>Coins</CustomLink>
                <CustomLink to='/contact'>Contact</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </header>
    );
};

export default Header;