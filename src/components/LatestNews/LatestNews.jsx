import React, { use } from 'react';
import Marquee from 'react-fast-marquee';

const promiseCategoryNews = fetch("/news.json").then(res => res.json())


const LatestNews = () => {

    const news = use(promiseCategoryNews)
    // console.log(news)

    const breakingNews = news.slice(0, 6)
    

    return (
        <div className='flex items-center gap-4 bg-base-200 mt-6 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2 rounded-xs'>Latest</p>
            <Marquee  pauseOnHover={true}>
                <div className='flex gap-7'>
                    
                    {
                        breakingNews.map(news => <p key={news.id} className='font-semibold text-accent'>{news.title}</p> )
                    }
                </div>
            </Marquee>
        </div>
    );
};

export default LatestNews;