import React, { useEffect, useState } from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';
import axios from 'axios';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({type}) => {

    const { data, loading, error } = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`);

    // const data = [
    //     {
    //         id: 1,
    //         img: 'https://images.pexels.com/photos/7602818/pexels-photo-7602818.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         img2: 'https://images.pexels.com/photos/7602830/pexels-photo-7602830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         title: 'Flower Vase',
    //         isNew: true,
    //         oldPrice: 80,
    //         price: 65,
    //     },

    //     {
    //         id: 2,
    //         img: 'https://images.pexels.com/photos/9008919/pexels-photo-9008919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         img2: 'https://images.pexels.com/photos/12509549/pexels-photo-12509549.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //         title: 'Wine Glassware',
    //         isNew: false,
    //         oldPrice: 100,
    //         price: 95,
    //     },

    //     {
    //         id: 3,
    //         img: 'https://images.pexels.com/photos/9743766/pexels-photo-9743766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         img2: 'https://images.pexels.com/photos/8105089/pexels-photo-8105089.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //         title: 'Plates',
    //         isNew: false,
    //         oldPrice: 50,
    //         price: 45,
    //     },

    //     {
    //         id: 4,
    //         img: 'https://images.pexels.com/photos/8367134/pexels-photo-8367134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    //         img2: 'https://images.pexels.com/photos/7663254/pexels-photo-7663254.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //         title: 'Plant pots',
    //         isNew: true,
    //         oldPrice:  65,
    //         price: 55,
    //     },

    //     // {
    //     //     id: 5,
    //     //     img: 'https://images.pexels.com/photos/4207791/pexels-photo-4207791.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //     //     img2: 'https://images.pexels.com/photos/4207785/pexels-photo-4207785.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //     //     title: 'Ceramic Vase',
    //     //     isNew: true,
    //     //     oldPrice: 160,
    //     //     price: 145,
    //     // },

    //     // {
    //     //     id: 6,
    //     //     img: 'https://images.pexels.com/photos/3865712/pexels-photo-3865712.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     //     img2: 'https://images.pexels.com/photos/1838543/pexels-photo-1838543.jpeg?auto=compress&cs=tinysrgb&w=600',
    //     //     title: 'Candles',
    //     //     isNew: true,
    //     //     oldPrice: 30,
    //     //     price: 26,
    //     // },

    //     // {
    //     //     id: 7,
    //     //     img: 'https://images.pexels.com/photos/4207786/pexels-photo-4207786.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //     //     img2: 'https://images.pexels.com/photos/4207794/pexels-photo-4207794.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    //     //     title: 'Marble Shelf',
    //     //     isNew: true,
    //     //     oldPrice: 150,
    //     //     price: 125,
    //     // },

    // ]

    // const [data, setData] = useState([]) 

    // useEffect(()=>{
    //     const fetchData = async () => {
    //         try{
    //             const res = await axios.get(process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`, 
    //             {
    //                 headers: {
    //                     Authorization : "bearer " + process.env.REACT_APP_API_TOKEN,
    //                 },
    //             }
    //             );
    //             setData(res.data.data)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     };
    //     fetchData();
    // }, [])

    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1> {type} Products</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, quam dignissimos non dolor quae, in saepe, optio consequatur commodi neque quibusdam ducimus maiores magnam quasi? Vitae odit magnam non saepe.</p>
            </div>

            <div className="bottom">
                {error 
                ? "There was an error in your request!" 
                : loading 
                ? "loading"
                : data?.map((item) => 
                    <Card item={item} key={item.id} />
                )}
            </div>
        </div>
    );
};

export default FeaturedProducts;
