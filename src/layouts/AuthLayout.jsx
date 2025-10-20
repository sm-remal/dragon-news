import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Spinner from '../components/Spinner/Spinner';

const AuthLayout = () => {

    const navigation = useNavigation()

    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 mx-auto py-5'>
                <Navbar></Navbar>
            </header>
            {
                navigation?.state === "loading" ? 
                <Spinner></Spinner> : 
                
                <main className='w-11/12 mx-auto py-5'>
                <Outlet></Outlet>
            </main>
            }
        </div>
    );
};

export default AuthLayout;