import React, { useState } from 'react';
import './Products.scss';
import List from '../../components/List/List';
import { useParams } from 'react-router-dom';

const Products = () => {

  const categoryId = parseInt(useParams().id)
  console.log(categoryId)
  const [maxPrice, setMaxPrice] = useState(1000)
  const [sort, setSort] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id='1' value={1}/>
            <label htmlFor='1'>Ceramics</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id='2' value={2}/>
            <label htmlFor='2'>Glassware</label>
          </div>

          <div className="inputItem">
            <input type="checkbox" id='3' value={3}/>
            <label htmlFor='3'>Plants</label>
          </div>

        </div>

        {/* progress bar */}
        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type='range' min={0} max={1000} onChange={(e)=> setMaxPrice(e.target.value)}></input>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" id='asc' value='asc' name='price' onChange={(e)=>setSort('asc')}/>
            <label htmlFor='asc'>Price (lowest first) </label>
          </div>
          <div className="inputItem">
            <input type="radio" id='desc' value='desc' name='price' onChange={(e)=>setSort('desc')}/>
            <label htmlFor='desc'>Price (Highest first) </label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className= 'categoryImg' src="https://images.pexels.com/photos/6694692/pexels-photo-6694692.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      <List categoryId={categoryId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products;
