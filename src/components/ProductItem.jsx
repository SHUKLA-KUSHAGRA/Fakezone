import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/CartSlice';
import "./ProductItem.css";

function ProductItem({item}) {
  const [dispimg,setdispimg] = useState(true);
  const dispatch = useDispatch();
  const addItemToCart = (item) => {
    dispatch(addToCart(item));
  }
  const removeItemFromCart = (item) => {
    dispatch(removeFromCart(item));
  }
  const cart = useSelector((state) => state.cart.cart);
  return (
    <div className='product'>
    <div className='productItem'>
        {dispimg ? 
          ( <>
              <img onClick={()=>{setdispimg(!dispimg)}} style={{width:250,height:250}}src={item.category.image} alt="product"/>
              <p onClick={()=>{setdispimg(!dispimg)}} className="productItemText">{item.title}</p>
              <p onClick={()=>{setdispimg(!dispimg)}}className="productItemText">₹ {item.price}</p> 
            </>
          ) :
          ( <>
              <h3 onClick={()=>{setdispimg(!dispimg)}} className="productItemText" style={{padding:"25px"}}>Description</h3>
              <p onClick={()=>{setdispimg(!dispimg)}} className="productItemText" style={{padding:"30px"}}>{item.description}</p>
            </>
          )}
          {cart.some((x) => x.id === item.id) ? (
            <button className="productItemButton" onClick={()=>removeItemFromCart(item)}>Remove from Cart</button>
          ) : (
            <button className="productItemButton" onClick={()=>addItemToCart(item)}>Add to Cart</button>
          )}
          <button className="productItemButton">Buy Now</button>
    </div>
    </div>
  );
}

export default ProductItem;