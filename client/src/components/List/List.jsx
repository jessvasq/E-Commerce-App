import React from 'react';
import './List.scss';
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const List = ({subCats, maxPrice, sort, categoryId}) => {
    // const data = [
    //     {
    //         id: 4,
    //         img: 'https://images.pexels.com/photos/8367134/pexels-photo-8367134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         img2: 'https://images.pexels.com/photos/7663254/pexels-photo-7663254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //         title: 'Plant pots',
    //         isNew: true,
    //         oldPrice:  65,
    //         price: 55,
    //     },

    //     {
    //         id: 5,
    //         img: 'https://images.pexels.com/photos/4207791/pexels-photo-4207791.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //         img2: 'https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //         title: 'Ceramic Vase',
    //         isNew: false,
    //         oldPrice: 160,
    //         price: 145,
    //     },

    //     {
    //         id: 6,
    //         img: 'https://images.pexels.com/photos/3865712/pexels-photo-3865712.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         img2: 'https://images.pexels.com/photos/1838543/pexels-photo-1838543.jpeg?auto=compress&cs=tinysrgb&w=600',
    //         title: 'Candles',
    //         isNew: false,
    //         oldPrice: 30,
    //         price: 26,
    //     },

    //     {
    //         id: 7,
    //         img: 'https://images.pexels.com/photos/4207786/pexels-photo-4207786.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //         img2: 'https://images.pexels.com/photos/4207794/pexels-photo-4207794.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //         title: 'Marble Shelf',
    //         isNew: true,
    //         oldPrice: 150,
    //         price: 125,
    //     },

    // ]

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][categories][id]=${categoryId}${subCats.map((item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}`);

  return (
    <div className='list'>
        {loading 
        ? 'loading' 
        : data?.map((item) => 
            <Card item={item} key={item.id}/>
        )}
    </div>
  )
}

export default List;