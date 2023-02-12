import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../redux/CartSlice';
import "./Cart.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = cart.map((item) => item.price*item.quantity).reduce((curr,prev) => curr+prev,0);
  const charges = (cart.length>0) ? 500 : 0;
  const discount = (totalPrice<500) ? 0 : 500;
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
              <LocationOnIcon style={{color:"gray"}}/>
              <div>
                <p>Select Your Location</p>
                <p>Please select a location so we can find you!</p>
                <button className='cartRightButton'>Select Location</button>
              </div>
            </div>
          </div>
          <div>
            <div style={{marginTop:10}}>
              <LocationOnIcon style={{color:"gray"}}/>
              <div>
                <p>Chose Your Saved Location</p>
                <button className='cartRightButton'>Chose Location</button>
              </div>
            </div>
          </div>
          <div>
            <div style={{marginTop:10}}>
              <ConfirmationNumberIcon style={{color:"gray"}}/>
              <div>
                <h4>Select / Apply Coupon</h4>
                <p>Apply coupons to avail offers on the products</p>
              </div>
            </div>
          </div>
          <div>
            <div style={{marginTop:10}}>
              <h3 style={{color:"blue"}}>Total Price : ₹{totalPrice}</h3>
            </div>
            <div style={{marginTop:10}}>
              <h3 style={{color:"blue"}}>Discount : ₹{discount}</h3>
            </div>
            <div style={{marginTop:10}}>
              <h3 style={{color:"blue"}}>Extra Charges : ₹{charges}</h3>
            </div>
            <div style={{marginTop:10}}>
              <h3 style={{color:"blue"}}>Grand Total : ₹{totalPrice-discount+charges}</h3>
            </div>
          </div>
          <button className='cartContainerButton' style={{margin:20,color:'white'}}>Place Order</button>
        </div>
      </div>
    </>
  );
}

export default Cart;