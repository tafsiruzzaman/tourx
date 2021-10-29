import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages/Packages';
import Testimonial from '../Testimonial/Testimonial';
import WhyChoose from '../WhyChoose/WhyChoose';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Packages></Packages>
            <WhyChoose></WhyChoose>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;