import React, { useContext } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

const SocialLogin = () => {
    const { loginWithGoogle, loginWithGitHub, user } = useContext(AuthContext);
    // const [error, setError] = useState('');
    // const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Google SignIn
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
                // setSuccess(true);
                navigate(location.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error.code);
                // setError(error.code);
            });
    };

    // GitHub SignIn
    const handleLoginWithGitHub = () => {
        loginWithGitHub()
            .then(result => {
                console.log(result.user);
                // setSuccess(true);
                navigate(location.state ? location.state : "/");
            })
            .catch(error => {
                console.log(error.code);
                // setError(error.code);
            });
    };

    return (

        user ? (<div></div>) : (<div>
            <h2 className='font-semibold text-gray-700 mb-5'>Login With</h2>
            <div className='space-y-3'>
                <button onClick={handleLoginWithGoogle} className='btn w-full btn-outline'>
                    <FcGoogle size={20} /> Login with Google
                </button>
                <button onClick={handleLoginWithGitHub} className='btn w-full btn-outline'>
                    <FaGithub size={20} /> Login with GitHub
                </button>
            </div>
        </div>)

    );
};

export default SocialLogin;
