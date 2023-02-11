import React from 'react'
import "./ProductItem.css";

function ProductItem({item}) {
  return (
    <div className='product'>
    <div className='productItem'>
        <img style={{width:200,height:200}}src={item.image} alt="product"/>
        <p className="productItemText">{item.title}</p>
    </div>
    </div>
  );
}

export default ProductItem;