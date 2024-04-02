import React from 'react';
import './Contact.scss'
import { Facebook, Instagram, Pinterest } from '@mui/icons-material';

const Contact = () => {
  return (
    <div className='contact'>
        <div className="wrapper">
            <span>Get in touch with us: </span>
            <div className="mail">
                <input type="text" placeholder='Enter your email'/>
                <button>JOIN US</button>
            </div>
            <div className="icons">
                <Instagram />
                <Facebook />
                <Pinterest />
            </div>
        </div>
    </div>
  )
}

export default Contact