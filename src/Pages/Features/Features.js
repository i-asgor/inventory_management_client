import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import samsung from '../..//images/logo/samsung.jpg';
import walton from '../..//images/logo/walton.jpg';
import lg from '../..//images/logo/lg.jpg';

const Features = () => {
    return (
        <div className="container my-5">
            <h1 className='text-primary text-center'>Our Partners</h1>
            <CardGroup className=''>
                <Card className='justify-content-center align-items-center'>
                    <Card.Img variant="top" src={samsung} style={{'width':"50%"}}/>
                </Card>
                <Card className='justify-content-center align-items-center'>
                    <Card.Img variant="top" src={lg} style={{'width':"50%"}}/>
                </Card>
                <Card className='justify-content-center align-items-center'>
                    <Card.Img variant="top" src={walton} style={{'width':"50%"}} />
                </Card>
                </CardGroup>
        </div>
    );
};

export default Features;