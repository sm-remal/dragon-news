import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { getFriendlyMessage } from '../../ErrorMessage/ErrorMessage';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Login = () => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const { signInUser, forgetPassword, loginWithGoogle, loginWithGitHub } = useContext(AuthContext)

    // Hooks 
    const location = useLocation()
    const navigate = useNavigate()
    const emailRef = useRef()



    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        // Reset Error or Success Message
        setSuccess("")
        setError("")

        // Sign In 
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                setSuccess(true)
                event.target.reset();
                if (!result.user.emailVerified) {
                    alert("Please verify your email address")
                }
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                const friendlyMessage = getFriendlyMessage(error.code)
                setError(friendlyMessage)

            });
    }

    // Google and GitHub SignIn
    const handleLoginWithGoogle = () =>{
        loginWithGoogle()
        .then(result => {
            console.log(result.user);
            setSuccess(true)
            navigate(`${location.state ? location.state : "/"}`)
        })
        .catch(error => {
            console.log(error.cole)
            setError(error.code)
        })
    }

    const handleLoginWithGitHub = () => {
        loginWithGitHub()
        .then(result => {
            console.log(result.user)
            setSuccess(true)
            navigate(`${location.state ? location.state : "/"}`)
        })
        .catch(error => {
            console.log(error)
            setError(error.code)
        })
    }

    // Forget password 
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        forgetPassword(email)
            .then(result => {
                console.log(result)
                alert("email sent")
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
                        <input type="email" name='email' ref={emailRef} className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />

                        <div onClick={handleForgetPassword}><a className="link link-hover">Forgot password?</a></div>

                        {
                            success && <p className='text-green-600'>Logged in successfully!</p>
                        }

                        {
                            error && <p className='text-red-600'>{error}</p>

                        }

                        <button className="btn btn-neutral bg-gray-800 mt-4">Login</button>
                    </fieldset>
                </form>
                <div className='divider text-gray-400'>or</div>
                <div className='space-y-3 '>
                    <button onClick={handleLoginWithGoogle} className='btn w-full btn-outline'> <FcGoogle size={20} /> Login with Google</button>
                    <button onClick={handleLoginWithGitHub} className='btn w-full btn-outline'> <FaGithub size={20} /> Login with GitHub</button>
                </div>
                <div className='text-center'>
                    <p className='font-medium text-gray-700'>Don't have an account? <Link to="/auth/register" className='text-secondary underline'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;