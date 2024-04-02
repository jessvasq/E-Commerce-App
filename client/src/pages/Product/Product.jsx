import React, { useState } from 'react';
import './Product.scss'
import { AddShoppingCart, Balance, FavoriteBorder } from '@mui/icons-material';


const Product = () => {

  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const images = [
    'https://images.pexels.com/photos/4207791/pexels-photo-4207791.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  ]

  return (
    <div className='product'>
      <div className="left">
      <div className="images-container">
        <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
        <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
      </div>

      <div className="mainImageCont">
        <img src={images[selectedImg]} alt="" />
      </div>
      </div>
    <div className="right">
      <h1>Product Title</h1>
      <span className='price'>$160</span>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit et amet libero mollitia sit explicabo. Unde illo dicta vel mollitia! Atque adipisci quod excepturi recusandae cum placeat harum possimus eveniet.
      </p>
      <div className="quantity">
        <button onClick={()=>setQuantity(prev => prev === 1 ? 1 : prev-1)}> - </button>
        {quantity}
        <button onClick={()=>setQuantity(prev => prev+1)}> + </button>
      </div>
      <button className='add'>
        <AddShoppingCart /> Add to Cart
      </button>
      <div className="links">
        <div className="item">
          <FavoriteBorder /> Add to Wishlist
        </div>
        <div className="item">
          <Balance /> Add to Compare
        </div>
      </div>
      <div className="info">
        <span>Vendor: CB2 </span>
        <span>Product Type: Cups</span>
        <span>Tag: Handmade</span>
      </div>
      <hr />
      <div className="info">
        <span>Description</span>
        <hr />
        <span>Additional Information</span>
        <hr />
        <span>FAQ</span>
      </div>
    </div>
    </div>
  )
}

export default Product;