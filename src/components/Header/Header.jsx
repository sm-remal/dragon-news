import React from 'react';
import logoImg from "../../assets/logo.png"
import { format } from 'date-fns';

const Header = () => {
    return (
        <div>
            <div className='flex flex-col justify-center items-center pt-5 space-y-2.5'>
                <img src={logoImg} alt="" className='w-[300px] md:w-[400px]' />
                <p className='text-accent'>Journalism Without Fear or Favour</p>
                <p className='font-medium text-accent'>{format(new Date(), "EEEE, MMMM dd, yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;