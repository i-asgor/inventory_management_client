import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const {_id, name, picture, price, description, quantity, supplier_name} = item;

    const navigate = useNavigate();
    const itemDetailNavigate = id => {
        navigate(`/inventory/${id}`);
    }

    return (
        <Col>
                    <Card>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                           Price: {price}
                        </Card.Text>
                        <Card.Text>
                            Quantity: {quantity}
                        </Card.Text>
                        <Card.Text>
                            Supplier Name: {supplier_name}
                        </Card.Text>
                        <Card.Text>
                            {description.slice(0,90) + "............."}
                        </Card.Text>
                        <Button onClick={()=>itemDetailNavigate(_id)} variant='primary'>Update</Button>
                        </Card.Body>
                    </Card>
        </Col>
    );
};

export default Item;