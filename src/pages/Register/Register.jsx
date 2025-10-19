import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const Register = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        // Create User
        createUser(email, password)
            .then(result => {
                console.log(result.user)
                updateUserProfile({displayName: name, photoURL: photoURL})
                .then(result => {
                    console.log(result.user)
                    navigate("/auth/login")
                })
                .catch(error => {
                    console.log(error)
                })
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                console.log(errorMessage)

            });
    }



    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <div className='flex justify-center'>
                    <h1 className="text-2xl text-gray-700 font-semibold">Register Your Account</h1>
                </div>
                <form onSubmit={handleRegister}>
                    <fieldset className="fieldset">
                        {/* Name  */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Your Name" />
                        {/* Photo URL  */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photoURL' className="input" placeholder="Photo URL" />
                        {/* Email  */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        {/* Password  */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <button className="btn btn-neutral bg-gray-800 mt-4">Register</button>
                    </fieldset>
                </form>
                <div className='text-center'>
                    <p className='font-medium text-gray-700'>Already have an account? Please <Link to="/auth/login" className='text-secondary underline'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;