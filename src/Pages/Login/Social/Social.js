import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from "../../../images/google.png";
import Loading from '../../Shared/Loading/Loading';

const Social = () => {
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if(loading){
        return <Loading></Loading>;
    }

    let customError;

    if (error) {
        customError=  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
    }

    

    if(user){
        navigate(from, {replace:true});
    }
    return (
        <div>
            
            {customError}
            <div className='d-flex align-items-center'>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
                <p className='mx-2 mt-2'>Or</p>
                <div style={{height:'1px'}} className='bg-primary w-50'></div>
            </div>
            <div>                
                <button onClick={()=> signInWithGoogle()} className='btn btn-primary w-50 d-block mx-auto mb-2'>
                    <img style={{width: '30px'}} src={google} alt="" />
                    <span>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default Social;