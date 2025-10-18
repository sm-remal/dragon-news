import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../components/NewsCard/NewsCard';

const CategoryNews = () => {
    const [categoryNews, setCategoryNews] = useState([])

    const data = useLoaderData()
    const { id } = useParams()
    // console.log(id, data)
    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data);
            return;
        } else if (id == "1") {
            const filteredNews = data.filter(news => news.others.is_today_pick == true)
            setCategoryNews(filteredNews)
        } else {
            const filteredNews = data.filter(news => news.category_id == id);
            setCategoryNews(filteredNews)
        }

    }, [data, id])
    return (
        <div>
            {/* <h2>Total News - <span className='text-secondary mb-5'>{categoryNews.length}</span></h2> */}
            <h2 className='text-lg text-gray-600 font-bold'>Dragon News Home</h2>
            <div className='grid grid-cols-1 gap-5 mt-4'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>

        </div>
    );
};

export default CategoryNews;