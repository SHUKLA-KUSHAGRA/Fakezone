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
          ( <div onClick={()=>{setdispimg(!dispimg)}}>
              <img style={{width:250,height:250}}src={item.category.image} alt="product"/>
              <p className="productItemText">{item.title}</p>
              <p className="productItemText">₹ {item.price}</p> 
            </div>
          ) :
          ( <div onClick={()=>{setdispimg(!dispimg)}}>
              <h3 className="productItemText" style={{padding:"25px"}}>Description</h3>
              <p className="productItemText" style={{padding:"30px"}}>{item.description}</p>
            </div>
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