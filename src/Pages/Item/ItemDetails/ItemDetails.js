import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const ItemDetails = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});
    const [value, setValue] = useState(item.quantity);

    useEffect(()=>{
        const url = `https://cryptic-falls-85122.herokuapp.com/inventory/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data => setItem(data))
    },[id])


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const newItem = parseInt(item.quantity) + parseInt(data.quantity);        
        // console.log(newItem)
        
        data = {'quantity':newItem};
        const {quantity,...rest} = item;
        const updateItem = {...data, ...rest}
        setItem(updateItem);
        const url = `https://cryptic-falls-85122.herokuapp.com/inventory/${id}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(output => {
            // console.log(output);
            // setQuantity(output);
            window.alert("quantity Updated Successfully!!");
        });
    }

    const delivered = (id) =>{
        let updateItem = item;
        if(updateItem.quantity > 0){            
            updateItem.quantity = updateItem.quantity - 1;
        }
        const data = {'quantity':updateItem.quantity};
        setValue(updateItem.quantity);

        const url = `https://cryptic-falls-85122.herokuapp.com/inventory/${id}`;
        fetch(url,{
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(output => {
            // console.log(output);
            // setQuantity(output);
            window.alert("quantity decrease Successfully!!");
        });
    }


    return (
        <div className='text-center py-5 container'>
            <div className="row">
                <div className="col-md-8 col-sm-12  mx-auto">
                <Card>
                    <Card.Header as="h5">ID: {id}</Card.Header>
                    <Card.Body>
                        <Card.Title>Name:{item.name}</Card.Title>
                        <Card.Img variant="top" src={item.picture} style={{"width":"30%"}} />
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
                        <Button variant="primary" onClick={()=>delivered(id)}>
                        <svg xmlns="http://www.w3.org/2000/svg" style={{'height':'31px'}} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>Delivered</Button>
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