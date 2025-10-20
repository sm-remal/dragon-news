import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch("/categories.json").then(res => res.json());

const Categories = () => {

    const allCategories = use(categoryPromise)
    // console.log(allCategories)

    return (
        <div>
            <h2 className='font-bold text-gray-700'>All Categories ({allCategories.length})</h2>
            <div className='flex flex-row flex-wrap md:flex-col gap-3 mt-5'>
                {
                    allCategories.map(category => 
                    <NavLink key={category.id} 
                    to={`/category/${category.id}`} 
                    className="btn bg-base-100 border-0 shadow-none hover:bg-base-300 font-semibold text-accent">
                        {category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;