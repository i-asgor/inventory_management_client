import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CustomItem from '../../../Hooks/CustomItem';
import ManageItem from '../ManageItem/ManageItem';

const ManageInventory = () => {
    const [items, setItems] = CustomItem([]);
    const navigate = useNavigate();

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
        // console.log(id)
    }

    const addItem = () =>{
        navigate('/additem');
    }
    return (
        <div className='container py-3'>
            <h1 className='text-primary text-center'>Items</h1>
            <Button className='btn btn-success my-2' onClick={addItem}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
            </svg>
                Add New Item</Button>
            <Row xs={1} md={3} className="g-4">
                {
                    items.map(item => <ManageItem key={item._id} item={item} itemDelete={itemDelete}></ManageItem>)
                }
            </Row>
        </div>
    );
};

export default ManageInventory;