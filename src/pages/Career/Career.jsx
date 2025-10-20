import React from 'react';
import { useNavigate } from 'react-router';

const Career = () => {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div className='flex flex-col justify-center items-center min-h-screen space-y-8'>
            <h2 className='font-bold text-xl md:text-2xl text-gray-500'>No data Available in this Page !!</h2>
            <button onClick={goBack} className='btn btn-sm outline-2'>Go Back</button>
        </div>
    );
};

export default Career;