import React from 'react';
import swimming from '../../assets/swimming.png'
import classImg from '../../assets/class.png'
import playground from '../../assets/playground.png'
import bgImg from '../../assets/bg.png'

const QZone = () => {
    return (
        <div>
            <div className='mt-7 bg-base-200 px-3 py-4'>
                <h2 className='font-semibold mb-5'>Q-Zone</h2>
                <div className='space-y-5'>
                    <img src={swimming} alt="" />
                    <img src={classImg} alt="" />
                    <img src={playground} alt="" />
                </div>
            </div>
            <div className='px-3 py-5'>
                <img src={bgImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;