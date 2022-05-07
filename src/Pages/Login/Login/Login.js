import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Social from '../Social/Social';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    if(loading || sending){
        return <Loading></Loading>;
    }


    if(user){
        // navigate(from, {replace:true});
    }

    let customError;

     if (error) {
        customError=  <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
    }

     const HandleLoginForm = async e =>{
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email,password);
        const {data} = await axios.post('https://cryptic-falls-85122.herokuapp.com/login',{email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, {replace:true});
    }

    const resetPassword = () => {
        const email = emailRef.current.value;
        if(email){
            sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else{
            toast('Please Enter Your Email')
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className="text-primary text-center my-3">Please Login</h2>
            <Form onSubmit={HandleLoginForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Email</Form.Label>
                    <Form.Control  type="email" ref={emailRef} placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {customError}
            <p>New to Inventory Management? <Link className='text-primary pe-auto text-decoration-none' to='/register'>Please SignUp</Link></p>
            <p>Forget Your Password? <button className='btn btn-link text-primary pe-auto text-decoration-none'  onClick={resetPassword}>Reset Password</button></p>
            <Social></Social>
            <ToastContainer/>
        </div>
    );
};

export default Login;