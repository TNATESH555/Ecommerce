import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function ENav() {
  const cartItems = useSelector(state => state.cart.cart );
  
  return (
    <div className='nav'>
        <div> <img src="amazonicon.png" alt=""  className='amazonicon'/><h3 style={{color:'white', marginTop:-25,marginLeft:50}}> mazon  </h3> </div>
           <div className='Cartbut'><Link to='/cart'><button class="cart-button">
           <svg class="cart-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 20c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm2.29-2H19c.39 0 .74-.23.89-.58l3-7c.09-.22.11-.47.04-.71a.987.987 0 00-.92-.71H7.31l-.95-4.57A.992.992 0 005.4 3H2c-.55 0-1 .45-1 1s.45 1 1 1h2.39l1.6 7.68L6.82 15H3c-.55 0-1 .45-1 1s.45 1 1 1h4.92c-.03.33-.06.66-.06 1s.02.67.06 1H6.29zm11.7-6H8.69L7.5 7h11.32l-1.84 5z"/>
        </svg>
        <span className='cartname'>Cart</span><span style={{color:'white',fontSize:'larger',paddingLeft:'5px', padding:'2px',height:'20px',marginBottom:'1'}}> {cartItems.length} 
        </span>
   </button></Link></div>
    </div>
  )
}

export default ENav