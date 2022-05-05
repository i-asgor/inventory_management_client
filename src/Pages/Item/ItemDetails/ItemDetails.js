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

    },[])


    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const newItem = parseInt(item.quantity) + parseInt(data.quantity);
        
        data = {'quantity':newItem};
        console.log(newItem)
        setItem(item);
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
                        <Button variant="primary" onClick={()=>delivered(id)}>Delivered</Button>
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