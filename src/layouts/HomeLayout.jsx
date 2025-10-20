import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header/Header';
import LatestNews from '../components/LatestNews/LatestNews';
import Navbar from '../components/Navbar/Navbar';
import LeftAside from '../components/homeLayout/LeftAside';
import RightAside from '../components/homeLayout/RightAside';
import Spinner from '../components/Spinner/Spinner';

const HomeLayout = () => {

    const navigation = useNavigation()

    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
            </header>


            {
                navigation?.state === "loading" ?
                    <Spinner></Spinner> :

                    <main className='w-11/12 mx-auto my-3 md:grid md:grid-cols-12 gap-5 mt-6 md:mt-2'>
                        <aside className='md:col-span-3 lg:sticky top-0 h-fit'>
                            <LeftAside></LeftAside>
                        </aside>
                        <section className="md:main col-span-6">
                            <Outlet></Outlet>
                        </section>
                        <aside className='md:col-span-3'>
                            <RightAside></RightAside>
                        </aside>
                    </main>
            }


        </div>
    );
};

export default HomeLayout;