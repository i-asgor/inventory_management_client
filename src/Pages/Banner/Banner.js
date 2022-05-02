import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import sliderimg1 from '../../images/Banner/slider1.jpg';
import sliderimg2 from '../../images/Banner/slider2.jpg';
import sliderimg3 from '../../images/Banner/slider3.jpg';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                className="d-block w-100 h-50"
                src={sliderimg1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>Electronics Inventory</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={sliderimg2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Electronics Inventory</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={sliderimg3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Electronics Inventory</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;