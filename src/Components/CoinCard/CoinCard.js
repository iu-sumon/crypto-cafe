import React from 'react';
import { Link } from 'react-router-dom';


const CoinCard = ({ coin }) => {
    const { image, name, symbol, id } = coin
    return (
        <Link to={`/coins_details/${id}`}>
            <div className='flex justify-between items-center shadow-xl px-10 py-5  rounded-2xl w-[270px] bg-lime-400 text-white font-mono font-bold'>
                <img className='w-16 h-16' src={image} alt="" />
                <div>
                    <p>{name}</p>
                    <p>{symbol}</p>
                </div>
            </div>
        </Link>
    );
};

export default CoinCard;