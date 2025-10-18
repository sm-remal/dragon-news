import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-4 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee  pauseOnHover={true}>
                <div className='flex gap-7'>
                    <p className='font-semibold text-accent'>Clashes erupt near Bangladesh parliament</p>
                    <p className='font-semibold text-accent'>Diplomatic tension- Bangladesh demands justice after three nationals killed in Tripura (India)</p>
                    <p className='font-semibold text-accent'>Tragedy in Dhaka- Garment factory fire kills at least 16</p>
                    <p className='font-semibold text-accent'>Sports- Bangladesh women's cricket team defeated as Alyssa Healy hits back-to-back centuries in World Cup</p>
                    <p className='font-semibold text-accent'>Migration/humanitarian- 18 Rohingya including 10 children detained in India</p>
                    <p className='font-semibold text-accent'>Political/constitutional process- Four left-wing parties boycott the charter signing</p>
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;