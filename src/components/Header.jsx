import React from 'react'
import "./Header.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from '@mui/icons-material/Menu';

function Header() {
  return (
    <>
    <div className='header'>
        <div>
            <img
                style={{width:"5rem",height:40,marginTop:10}}
                className="image"
                src="https://links.papareact.com/f90"
                alt="logo"
            />
        </div>
        <div className='headerInputContainer'>
            <input className='headerInput' type="text" placeholder='Search Items or Products'/>
            <SearchOutlinedIcon style={{color:"white",marginLeft:4,marginTop:2}}/>
        </div>
        <div>
            <h4 className='headerText'>Hello John</h4>
            <h4 className='headerText'>Accounts & Lists</h4>
        </div>
        <div>
            <h4 className='headerText'>Returns</h4>
            <h4 className='headerText'>& orders</h4>
        </div>
        <div style={{position:'relative'}}>
            <ShoppingCartIcon style={{color:"white"}}/>
            <span style={{position:'absolute',
                              left:14,
                              right:14,
                              backgroundColor:"white",
                              width:14,
                              height:14,
                              borderRadius:7,
                              textAlign:"center",
                              fontSize:12,
                              fontWeight:400}}>0</span>
        </div>
    </div>
    <div className='headerBottom'>
        <MenuIcon style={{color:'white',paddingTop:6}}/>
        <p className='headerBottomText'>Buy</p>
        <p className='headerBottomText'>Healthy Products</p>
        <p className='headerBottomText'>Sell</p>
        <p className='headerBottomText'>Baby</p>
        <p className='headerBottomText'>Prime Video</p>
        <p className='headerBottomText'>Super Saver Sale</p>
        <p className='headerBottomText'>Offers</p>
        <p className='headerBottomText'>Mini TV</p>
    </div>
    </>
  );
}

export default Header;