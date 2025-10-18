import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-semibold text-gray-700 mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button className='btn w-full btn-outline'> <FcGoogle size={20} /> Login with Google</button>
                <button className='btn w-full btn-outline'> <FaGithub size={20} /> Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;