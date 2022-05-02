import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [checked, setChecked] = useState(false);
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification: true});
    
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    if(loading || updating){
        return <Loading></Loading>;
    }

    let customError;

    if (error ||error1) {
        customError=  <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }

    const handleRegister = async(e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email,password);
        await updateProfile({displayName:name})

        if(user){
            navigate('/home')
        }

    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className="text-primary text-center my-3">Please Signup</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Your Name" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  type="password" name='password' placeholder="Password" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={()=> setChecked(!checked)} type="checkbox" name='terms' label="Accept Electronics Inventory Management Terms and Conditions" />
                </Form.Group>
                
                <Button disabled={!checked} variant="primary" type="submit">
                    SignUp
                </Button>
            </Form>
            {customError}            
            <p>Already Have an Account? <Link className='text-primary pe-auto text-decoration-none' to='/login'>Please Login</Link></p>
        </div>
    );
};

export default Register;