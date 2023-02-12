import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import "./Body.css";
import ProductItem from './ProductItem';

function Body() {
    const [products,setProducts] = useState([]);
    const cart = useSelector((state) => state.cart.cart);
    console.log(cart);
    async function getDataFromApi() {
        const api = await fetch('https://api.escuelajs.co/api/v1/products')
            .then(res=>res.json());
        setProducts(api);
        console.log(api);
    }
    useEffect(()=>{
        getDataFromApi();
    },[]);

    return (
        <div className='body'>
            <div className='bodyItems'>
                {products.map((item,idx)=>{
                   return <ProductItem item={item} key={idx}/>
                })}
            </div>
        </div>
    );
}

export default Body;