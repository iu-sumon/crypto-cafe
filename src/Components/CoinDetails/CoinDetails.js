import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const CoinDetails = () => {
    const [coin, setCoin] = useState({})
    const [loading, setLoading] = useState(false)
    const { coinId } = useParams();
    useEffect(() => {
        setLoading(true)
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
            .then(res => res.json())
            .then(data => {
                setCoin(data)
                setLoading(false)
            })
    }, [coinId])
    return (
        <>{loading ? (<Spinner></Spinner>) : (<div className='flex md:justify-around h-[80vh] bg-gray-300 py-20 items-center'>
            <div>
                <div>
                    <h1 className='text-4xl font-mono font-bold'>General Info:</h1>
                    <p>Coin Name:{coin.name}</p>
                    <p>Market Cap Rank:{coin.market_cap_rank}</p>
                    <p>Origin:{coin.country_origin ? coin.country_origin : "Not Found"}</p>
                    <p>Contact Address:{coin.country_address}</p>
                    <p>Hashing Algorithm:{coin.hashing_algorithm}</p>
                    <p>Genesis Date:{coin.genesis_date}</p>
                    <p>Last Updated:{coin.last_updated}</p>
                </div>
                <div>
                    <h1 className='text-4xl font-mono font-bold'>Scores:</h1>
                    <p>Community Score:{coin.community_score}</p>
                    <p>Developer Score:{coin.developer_score}</p>
                    <p>Liquidity:{coin.liquidity_score}</p>
                    <p>Public Interest Score:{coin.public_interest_score}</p>
                </div>
            </div>
            <div>
                <img src={coin.image?.large} alt="" />
            </div>
        </div>)}
        </>
    );
};

export default CoinDetails;