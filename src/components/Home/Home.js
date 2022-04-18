import React from 'react';
import Slider from '../Slider/Slider';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <Slider></Slider>
            {/* <span className='py-5'> hello</span> */}
            <Services></Services>
        </>
    );
};

export default Home;