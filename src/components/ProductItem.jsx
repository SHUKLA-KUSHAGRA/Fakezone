import React, { useState } from 'react'
import "./ProductItem.css";

function ProductItem({item}) {
  const [dispimg,setdispimg] = useState(true);

  return (
    <div className='product'>
    <div className='productItem'>
        {dispimg ? 
          (<>
            <img onClick={()=>{setdispimg(!dispimg)}} style={{width:250,height:250}}src={item.category.image} alt="product"/>
            <p onClick={()=>{setdispimg(!dispimg)}} className="productItemText">{item.title}</p>
            <p onClick={()=>{setdispimg(!dispimg)}}className="productItemText">₹ {item.price}</p> 
          </>) :
          (<>
            <h3 onClick={()=>{setdispimg(!dispimg)}} className="productItemText" style={{padding:"25px"}}>Description</h3>
            <p onClick={()=>{setdispimg(!dispimg)}} className="productItemText" style={{padding:"30px"}}>{item.description}</p>
          </>)}
          <button className="productItemButton">Add to Cart</button>
          <button className="productItemButton">Buy Now</button>
    </div>
    </div>
  );
}

export default ProductItem;