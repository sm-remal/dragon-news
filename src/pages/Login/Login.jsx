import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {

    const {signInUser} = useContext(AuthContext)

    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    


    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        // Sign In 
        signInUser(email, password)
        .then(result => {
            console.log(result.user);
            navigate(`${location.state ? location.state : "/"}`)
        })
        .catch(error => {
            console.log(error.message)
        })

    }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <div className='flex justify-center'>
                    <h1 className="text-2xl text-gray-700 font-semibold">Login Your Account</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <fieldset className="fieldset">

                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral bg-gray-800 mt-4">Login</button>
                    </fieldset>
                </form>
                <div className='text-center'>
                    <p className='font-medium text-gray-700'>Don't have an account? <Link to="/auth/register" className='text-secondary underline'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;