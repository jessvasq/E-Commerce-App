import React from 'react';
import './Categories.scss';
import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className='categories'>
        <div className="col">
            <div className="row">
                <img src='https://images.pexels.com/photos/6956510/pexels-photo-6956510.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Sale</Link>
                </button>
            </div>
            <div className="row">
            <img src='https://images.pexels.com/photos/7354507/pexels-photo-7354507.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Vases</Link>
                </button>
            </div>
        </div>
        <div className="col">
            <div className="row">
            <img src='https://images.pexels.com/photos/8356835/pexels-photo-8356835.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Ceramics</Link>
                </button>
            </div>
        </div>
        <div className="col col-large">
        <div className="row">
            <div className="col">
                <div className="row">
                <img src='https://images.pexels.com/photos/1048035/pexels-photo-1048035.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Plants</Link>
                </button>
                </div>
            </div>
            <div className="col">
                <div className="row">
                <img src='https://images.pexels.com/photos/17997391/pexels-photo-17997391/free-photo-of-decorative-candles-on-wooden-table.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>Candles</Link>
                </button>
                </div>
            </div>
        </div>
        <div className="row">
        <img src='https://images.pexels.com/photos/5987206/pexels-photo-5987206.jpeg?auto=compress&cs=tinysrgb&w=600' alt=''/>
                <button>
                    <Link className='link' to='/products/1'>GlassWare</Link>
                </button>
        </div>
        </div>
    </div>
  )
}

export default Categories;