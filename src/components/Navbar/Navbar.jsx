import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../../assets/user.png"
import { AuthContext } from '../../context/AuthContext';


const Navbar = () => {

    const {user, signOutUser} = useContext(AuthContext)

    // Sign Out 
    const handleSignOut = () => {

        signOutUser()
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
    return (
        <div className='flex items-center justify-between'>
            <div className=""></div>
            <div className="nav flex gap-4 md:ml-42">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="career">Career</NavLink>
            </div>
            <div className="login-btn flex items-center gap-4">
                <img className='w-[35px] h-[35px] rounded-full' src={`${user ? user.photoURL : userIcon}`} alt="" />
                {
                    user ? <Link onClick={handleSignOut} className='btn btn-primary px-8'>Sign Out</Link> : <Link to="/auth/login" className='btn btn-primary px-8'>Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;