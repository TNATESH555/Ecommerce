import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { addtocart } from './productSlices';


function ProductDetail() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(null);
  const dispatch=useDispatch()


  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      const filteredProduct = products.find(product => product.id === parseInt(id));
      setProductDetail(filteredProduct);
    }
  }, [id, products]);

  return (
    <div id='productbox'>
    <div className='productDetail'>
      
      {productDetail && (
        <div className='productimage'>
          <h3 style={{marginLeft:'50px'}}>{productDetail.title}</h3>
          <img src={productDetail.image} alt={productDetail.title} style={{height:'250px',width:'250px'}} className='productDetailImage' /> 
          <h1 style={{marginLeft:'150px'}}>&#x20b9;{productDetail.price}</h1>
          <p style={{width:'300px',marginLeft:'450px',marginTop:'-330px'}}>{productDetail.description}</p>
          <br />
          <button className='productDetailbuttonadd'>Buy now</button><button className='productDetailbuttonRemove' onClick={()=>dispatch(addtocart(productDetail ))}>Add to cart</button>
        </div>
      )}
    </div></div>
  );
}

export default ProductDetail;