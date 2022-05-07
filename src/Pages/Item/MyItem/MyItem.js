import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import ManageItem from '../ManageItem/ManageItem';

const MyItem = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    // console.log(user)
    // const [items, setItems] = CustomItem([]);
    const [items, setItems] = useState([]);

    useEffect(()=>{        
        const getItem = async () =>{
            const email = user.email;
            const url = `https://cryptic-falls-85122.herokuapp.com/myitem?email=${email}`;
            try{
                const {data} = await axios.get(url,{
                    headers:{
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                setItems(data);
            }
            catch(error){
                console.log(error.message);
                if(error.response.status === 401 || error.response.status === 403){
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getItem();
    },[user])

    const itemDelete = id =>{
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url = `https://cryptic-falls-85122.herokuapp.com/inventory/${id}`;
            fetch(url,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = items.filter(item => item._id !== id);
                setItems(remaining);
            });
        }
        console.log(id)
    }
    return (
        <div className='container py-3'>
            <h1 className='text-primary text-center'>My Items</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    ((items.length) === 0)?<Loading></Loading>:
                    items.filter((item)=> {return item.email === user.email}).map(item => <ManageItem key={item._id} item={item} itemDelete={itemDelete}></ManageItem>)
                }
            </Row>
        </div>
    );
};

export default MyItem;