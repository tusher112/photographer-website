import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
       
       <footer className='h-[128rem] bg-blue-600 text-center bg-dark text-white sticky bottom-0 py-3' >
            <p><small> Design And Development by Mohammad Tusher Ahmed Aman copyright @ {year} </small></p>
        </footer>
    );
};

export default Footer;