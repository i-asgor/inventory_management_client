import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user, loading] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://cryptic-falls-85122.herokuapp.com/inventory`;
        fetch(url,{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(output => {
            console.log(output);
        })
    }
    return (
        <div className='w-50 mx-auto my-5 text-center'>
            <h2>Please Add a Item</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />                
                <input className='mb-2' placeholder='Supplier Name' {...register("supplier_name")} />                
                <input className='mb-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("picture")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' hidden value={user.email} placeholder='email' {...register("email")} />
                <input type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;