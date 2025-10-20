import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { getFriendlyMessage } from '../../ErrorMessage/ErrorMessage';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const Register = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const trams = event.target.trams.checked;



        // Password validation 
        const atLeast6character = /^[\S\s]{6,}$/;
        const oneLetterOneDigit = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
        const uppercaseLowercase = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

        if (!atLeast6character.test(password)) {
            setError("Password must be at least 6 characters long!")
            return;
        } else if (!oneLetterOneDigit.test(password)) {
            setError("Password must contain at least one letter and one number!")
            return;
        } else if (!uppercaseLowercase.test(password)) {
            setError("Password must have at least one uppercase, one lowercase, and one number!")
            return;
        } else if (!trams) {
            setError("Please accept our trams and condition!")
            return;
        }

        // Reset Error or Success Message
        setSuccess("")
        setError("")

        // Create User
        createUser(email, password)
            .then((result) => {
                console.log("User created:", result.user);
                setSuccess(true);
                event.target.reset();

                // Profile Update
                updateUserProfile({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        // console.log("Profile updated");
                        alert("Profile Update")

                        // Verification Email
                        verifyEmail()
                            .then(() => {
                                console.log("Verification email sent");
                                alert("Please login to your email and verify your email address.")
                                navigate("/auth/login"); // Navigate after email sent
                            })
                            .catch((error) => {
                                console.log("Email verification error:", error);
                                setError("Failed to send verification email.");
                            });
                    })
                    .catch((error) => {
                        console.log("Profile update error:", error);
                        setError("Failed to update profile.");
                    });
            })
            .catch((error) => {
                const friendlyMessage = getFriendlyMessage(error.code);
                console.log("Create user error:", error.message);
                setError(friendlyMessage);
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
                        <input type="text" name='name' className="input w-full" required placeholder="Your Name" />
                        {/* Photo URL  */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photoURL' className="input w-full" placeholder="Photo URL" />
                        {/* Email  */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input w-full" required placeholder="Email" />
                        {/* Password  */}
                        <label className="label">Password</label>
                        <div className='relative'>
                            <input type={`${showPassword ? "text" : "password"}`} name='password' className="input w-full" required placeholder="Password" />
                            <div onClick={() => setShowPassword(!showPassword)} className='absolute top-3 right-4 text-gray-500 cursor-pointer' >
                                {showPassword ? <FaEye size={18} /> : <FaEyeSlash size={18} />}
                            </div>
                        </div>

                        {/* Check Box  */}
                        <label className="label">
                            <input type="checkbox" name='trams' className="checkbox" />
                            Accept our terms and condition.
                        </label>

                        {
                            success && <p className='text-green-600 mt-2'>Account created successfully! You can now log in</p>
                        }

                        {
                            error && <p className='text-red-600 mt-2'>{error}</p>

                        }

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