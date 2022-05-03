import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';

const Features = () => {
    return (
        <div className="container my-5">
            <CardGroup>
                <Card>
                    <div className="w-25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                        <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <Card.Body>
                    <Card.Title>Inventory Control</Card.Title>
                    <Card.Text>
                    Enable your business to become even more cost effective with barcode scanning and automation
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <div className="w-25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <Card.Body>
                    <Card.Title>eCommerce</Card.Title>
                    <Card.Text>
                    Integrated systems allow you to promise "in by 2, out by 4" to WOW your customers.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='ml-2'>
                    <div className="w-25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                        </svg>
                    </div>
                    <Card.Body>
                    <Card.Title>Work Order</Card.Title>
                    <Card.Text>
                    Create a plan for a build, and give your team the clarity on the work that needs to be performed.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Features;