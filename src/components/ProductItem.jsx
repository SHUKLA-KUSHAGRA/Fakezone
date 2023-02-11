import React from 'react'
import "./ProductItem.css";

function ProductItem({item}) {
  return (
    <div className='productItem'>
        <img style={{width:200,height:200}} src={item.image} alt="product"/>
        <h3 style={{width:200}}>{item.title}</h3>
    </div>
  );
}

export default ProductItem;