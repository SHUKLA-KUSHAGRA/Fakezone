import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/CartSlice';
import "./Cart.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const increaseItem = (item) => {
    dispatch(incrementQuantity(item));
  }
  const decreaseItem = (item) => {
    dispatch(decrementQuantity(item));
  }
  const removeItem = (item) => {
    dispatch(removeFromCart(item));
  }
  return (
    <>
      <Header/>
      <div className='cart'>
        <div className='cartLeft'>
          {
            (cart.length===0) ? <h1 style={{minWidth:400}}>Add Items To Cart</h1> : <></>
          }
          {cart.map((item,idx) => (
            <div className='cartContainer'>
              <div>
                <img src={item.category.image} style={{width:230,height:250}} alt="product"/>
              </div>
              <div className='cartContainerText'>
                <h2 className='cartContainerItemText'>{item.title} <br/> <span>( ₹{item.price * item.quantity} )</span></h2>
                <h3 className='cartContainerItemText'>Description</h3>
                <p className='cartContainerItemText'>{item.description}</p>
                <button className='cartContainerButton' onClick={() => removeItem(item)}>Remove Item</button>
              </div>
              <div className='cartContainerCounter'>
                <button className='cartContainerButton' onClick={() => increaseItem(item)}>+</button>
                <h3 style={{color:"#123456"}}>{item.quantity}</h3>
                <button className='cartContainerButton' onClick={() => decreaseItem(item)}>-</button>
              </div>
            </div>
          ))}
        </div>
        <div className='cartRight'>
          <div>
            <div>
              <LocationOnIcon/>
              <div>
                <p>Select Your Location</p>
                <p>Please select a location so we can find you!</p>
              </div>
            </div>
          </div>
          <div>

          </div>
          <div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;