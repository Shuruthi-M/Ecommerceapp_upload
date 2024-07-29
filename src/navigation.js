import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './navigation.css';


 const Navigation = () => {
   
  return (
    <div>
        <div className='homepage'>
    <ul className='navbar'>
    <li><a href="/category"><b>category</b></a></li>
      <li><a href="/deals"><b>Deals</b></a></li>
      <li><a href="/whatsnew"><b>What's new</b></a></li>
      <li><a href="/delivery"><b>Delivery</b></a></li>
    </ul>
    <div className="profiledata">
      <AccountCircleOutlinedIcon />
      <h4>Account</h4>
    </div>
    <div className="profiledata">
      <ShoppingCartOutlinedIcon />
      <h4>Cart</h4>
    </div>
  </div>
   </div>
  )
}
export default Navigation;
