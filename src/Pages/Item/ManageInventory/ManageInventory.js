import React from 'react';
import { Row } from 'react-bootstrap';
import CustomItem from '../../../Hooks/CustomItem';
import ManageItem from '../ManageItem/ManageItem';

const ManageInventory = () => {
    const [items, setItems] = CustomItem([]);
    const itemDelete = id =>{
        const proceed = window.confirm('Are You Sure?')
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;
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
    return (
        <div className='container py-3'>
            <h1 className='text-primary text-center'>Items</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    items.map(item => <ManageItem key={item._id} item={item} itemDelete={itemDelete}></ManageItem>)
                }
            </Row>
        </div>
    );
};

export default ManageInventory;