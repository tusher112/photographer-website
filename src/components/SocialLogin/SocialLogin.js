import React from 'react';
import google from '../../images/google.jpg';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../src/firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    
    let errorElement;

    if(loading || loading){
        return <Loading></Loading>
    }

    if (error || error) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error?.message}</p>
    }

    if (user || user) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-success w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Sign In with Google</span>
                </button>
               
              
            </div>
        </div>
    );
};

export default SocialLogin;