import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [quantity, setQuantity] = useState(item.quantity);

    useEffect(()=>{
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setItem(data))

    },[])


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data);
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(output => {
            console.log(output);
            // setQuantity(output);
            window.alert("quantity Updated Successfully!!");
        })
    }

    const delivered = () =>{
        const reduceNumber = item.quantity;
        const resQuantity = reduceNumber-1;
        console.log(resQuantity)
    }
    return (
        <div className='text-center py-5 container'>
            <div className="row">
                <div className="col-md-6 col-sm-12  mx-auto">
                <Card>
                    <Card.Header as="h5">ID: {id}</Card.Header>
                    <Card.Body>
                        <Card.Title>Name:{item.name}</Card.Title>
                        <Card.Text>
                            Price: {item.price}
                        </Card.Text>
                        <Card.Text>
                            Quantity: {item.quantity}
                        </Card.Text>
                        <Card.Text>
                            Supplier Name: {item.supplier_name}
                        </Card.Text>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Button variant="primary" onClick={delivered}>Delivered</Button>
                    </Card.Body>
                    </Card>
                    <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                        <input className='mb-2' placeholder='Restock Item' type="number" {...register("quantity")} />
                        <input type="submit" value="Restock Item Quantity" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;