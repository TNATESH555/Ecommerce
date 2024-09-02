import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {clearcart, gettotal,removeFromCart } from './productSlices';
import { useEffect } from 'react';

function Cart() {
  
  const cart = useSelector(state => state.cart);
  
  const dispatch=useDispatch()
  const hasItems = cart.cart.length > 0;

  const handleClearCart=()=>{
    dispatch(clearcart())
  }

  const handleRemove=(cartItem)=>{
    dispatch(removeFromCart(cartItem))

  }
 
  useEffect(()=>{
  dispatch(gettotal())
  },[cart,dispatch])

  return (
    <div className='carts'>
      
      {hasItems ? (
        <ul className='cartpro'>
          <h1 style={{marginLeft:'10px'}} className='cartHeading'>Shopping Cart</h1> <hr />
          {cart.cart.map((item, index) => (<>
          <table ><tr >
            <th><h3 style={{width:'750px' ,paddingLeft:'80px'}}>{item.title}</h3></th>
              <th style={{paddingLeft:'50px'}}></th><h5 style={{marginTop:'-40px'}}>Price</h5>
                               
              </tr>
          
          </table>
          <button onClick={()=>handleRemove(item)} style={{marginLeft:'295px', position:'relative', top:'125px',left:'65px',textDecoration:'none'}}>Delete</button>
          <br /> 
           <div style={{paddingBottom:'0px'}}><img src={item.image}style={{width:'200px',height:'200px', marginLeft:'30px',marginTop:'-50px'}} alt='Products'/> 
            <h4 style={{marginLeft:'530px', marginTop:'-50px'}}>
           </h4> <h3 style={{marginLeft:'900px',position:'relative',top:'-220px',right:'17px'}}>
           &#x20b9;{item.price}</h3> <hr />
           </div></> 
          ))} <h3 style={{marginLeft:'680px'}}>Total amount to be paid:  &#x20b9;{cart.cartTotalAmount.toFixed(2)}</h3> 
          <button className='checkout' onClick={()=>handleClearCart()}>Check out</button>
       
        </ul>
      ) : (
        <div style={{marginLeft:'550px',marginTop:'220px'}}><h1>Your cart is empty</h1>
         <img src="cart.png" alt=""  
         className='emptyicon'/></div>
      )}
        
    </div>
   
  );
}

export default Cart;