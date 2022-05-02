import React from 'react';
import { Row } from 'react-bootstrap';
import CustomItem from '../../../Hooks/CustomItem';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = CustomItem([]);
    return (
        <div className='container py-3'>
            <h1 className='text-primary text-center'>Items</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    items.slice(0,6).map(item => <Item key={item.id} item={item}></Item>)
                }
            </Row>
        </div>
    );
};

export default Items;