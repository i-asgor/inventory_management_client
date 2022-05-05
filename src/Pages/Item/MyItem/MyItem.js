import React from 'react';
import { Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import CustomItem from '../../../Hooks/CustomItem';
import ManageItem from '../ManageItem/ManageItem';

const MyItem = () => {
    const [user] = useAuthState(auth);
    // console.log(user)
    const [items, setItems] = CustomItem([]);
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
                    items.filter((item)=> {return item.email === user.email}).map(item => <ManageItem key={item._id} item={item} itemDelete={itemDelete}></ManageItem>)
                }
            </Row>
        </div>
    );
};

export default MyItem;