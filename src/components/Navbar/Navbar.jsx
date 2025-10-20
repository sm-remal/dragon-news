import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from "../../assets/user.png"
import { AuthContext } from '../../context/AuthContext';


const Navbar = () => {

    const { user, signOutUser } = useContext(AuthContext)

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
        <div className='flex items-center justify-between mt-8 md:mt-5'>
            <div className="hidden md:flex"></div>
            <div className='flex items-center'>
                <div className="navbar-start">
                    <div className="dropdown">
                        {/* Mobile menu button */}
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>

                        {/* Mobile dropdown menu */}
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                            <li>
                                <NavLink to="/" className="font-medium text-accent">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="about" className="font-medium text-accent">About</NavLink>
                            </li>
                            <li>
                                <NavLink to="career" className="font-medium text-accent">Career</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Desktop horizontal menu */}
                <div className="navbar-center hidden lg:flex">
                    <div className="nav flex gap-4 md:ml-42">
                        <NavLink to="/" className="font-medium text-accent">Home</NavLink>
                        <NavLink to="about" className="font-medium text-accent">About</NavLink>
                        <NavLink to="career" className="font-medium text-accent">Career</NavLink>
                    </div>
                </div>
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