import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CustomItem from '../../../Hooks/CustomItem';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = CustomItem([]);
    const navigate = useNavigate();

    const InventoryManage = () =>{
        navigate('/manageitem');
    }
    return (
        <div className='container py-3'>
            <h1 className='text-primary text-center'>Items</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    items.slice(0,6).map(item => <Item key={item._id} item={item}></Item>)
                }
            </Row>
            <Button className='btn btn-success my-2' onClick={InventoryManage}>Manage Inventory</Button>
        </div>
    );
};

export default Items;