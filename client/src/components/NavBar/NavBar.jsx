import React, { useState } from 'react';
//Icons
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import Cart from '../Cart/Cart';

const NavBar = () => {

  const [open, setOpen] = useState(false)

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="left">
              <div className="item">
                <img className='lang-img' src="/images/en-sp.jpg" alt="" />
                <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                  <span>USD</span>
                  <KeyboardArrowDownIcon />
                </div>
                <div className="item">
                  <Link className='link' to='products/1'>Women</Link>
                </div>
                <div className="item">
                  <Link className='link' to='products/2'>Men</Link>
                </div>
                <div className="item">
                  <Link className='link' to='products/3'>Children</Link>
                </div>
            </div>

            <div className="center">
              <Link className='link' to='/'>STORE</Link>
            </div>

            <div className="right">
                <div className="item">
                  <Link className='link' to='/'>Homepage</Link>
                </div>
                <div className="item">
                  <Link className='link' to='/'>About</Link>
                </div>
                <div className="item">
                  <Link className='link' to='/'>Contact</Link>
                </div>
                <div className="item">
                  <Link className='link' to='/'>Stores</Link>
                </div>
                <div className="icons">
                  <SearchIcon />
                  <FavoriteIcon />
                  <LoginIcon />
                  {/* if it's true, it'll be false  */}
                  <div className="cartIcon" onClick={()=>setOpen(!open)}>
                    <ShoppingCartIcon />
                    <span>0</span>
                  </div>
               
                </div>

            </div>
   
        </div>
        {/* if it's open, show the cart */}
        {open && <Cart/>}
  
    </div>
  )
}

export default NavBar;
