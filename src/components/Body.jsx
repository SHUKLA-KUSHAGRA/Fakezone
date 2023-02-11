import React, { useEffect, useState } from 'react'
import "./Body.css";
import ProductItem from './ProductItem';

function Body() {
    const [products,setProducts] = useState([]);

    async function getDataFromApi() {
        const api = await fetch('https://fakestoreapi.com/products')
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