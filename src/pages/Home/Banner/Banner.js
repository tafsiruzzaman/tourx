import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner-1.png';
import banner2 from '../../../images/banner-2.png';
import banner3 from '../../../images/banner-3.png';

const Banner = () => {
    return (
        <Carousel>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src={banner2}
                alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <img
                className="d-block w-100"
                src={banner3}
                alt="First slide"
                />
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;