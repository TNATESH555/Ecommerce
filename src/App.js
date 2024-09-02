import React from 'react'
import Ecommerce from './e-commerce'
import ENav from './ENav'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Cart from './cart.jsx';
import ProductDetail from './ProductDetail.jsx';


function App() {
  return (
  <Router>
        <ENav/>
     <Routes>    
        <Route path='/'  element={<Ecommerce/>}/> 
        <Route path='/cart'element={<Cart/>}/>    
        <Route path='/product/:id'element={<ProductDetail/>}/>          
     </Routes>
      <Footer/>
  </Router>
  )
}

export default App