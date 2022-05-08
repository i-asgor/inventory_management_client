import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageItem = ({item,itemDelete}) => {

    const {_id, name, picture, price, description, quantity, supplier_name} = item;
    const navigate = useNavigate();

    const itemDetailNavigate = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <Col>
                    <Card>
                        <Card.Img variant="top" src={picture} style={{"width":"30%"}} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                           Price: {price}
                        </Card.Text>
                        <Card.Text>
                            Quantity: {
                                 (quantity !== 0)?quantity:"sold Out"
                            }
                        </Card.Text>
                        <Card.Text>
                            Supplier Name: {supplier_name}
                        </Card.Text>
                        <Card.Text>
                            {description.slice(0,90) + "............."}
                        </Card.Text>
                        <Button onClick={()=>itemDetailNavigate(_id)} variant='primary'>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{'height':'31px'}} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                        </svg>Update</Button>
                        <Button onClick={()=>itemDelete(_id)} variant='danger'>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{'height':'31px'}} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>Delete</Button>
                        </Card.Body>
                    </Card>
        </Col>
    );
};

export default ManageItem;