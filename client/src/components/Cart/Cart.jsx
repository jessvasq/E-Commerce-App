import React from 'react';
import './Cart.scss';
import { DeleteOutline } from '@mui/icons-material';

const Cart = () => {

    const data = [
    {
        id: 7,
        img: 'https://images.pexels.com/photos/4207786/pexels-photo-4207786.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        img2: 'https://images.pexels.com/photos/4207794/pexels-photo-4207794.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
        title: 'Marble Shelf',
        desc: 'White Marble Shelf',
        isNew: true,
        oldPrice: 150,
        price: 125,
    }]


  return (
    <div className='cart'>
        <h1>Cart</h1>
        {data.map(item => (
            <div className="item" key={item.id}>
                <img src={item.img} alt=''/>
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price"> 1 x {item.price}</div>
                </div>
            <DeleteOutline className='delete' />
            </div>
        ))}
     
     <div className="total">
        <span>Subtotal</span>
        <span>$150</span>
     </div>
    <button>Proceed to Checkout</button>
    <span className='reset'>Reset Cart</span>
    </div>
  )
};

export default Cart;