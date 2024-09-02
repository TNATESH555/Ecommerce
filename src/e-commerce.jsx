import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { useDispatch } from 'react-redux';
import { addtocart } from './productSlices';
import { Link } from 'react-router-dom';


const truncateText = (text, maxLength) => (
  text.length > maxLength ? text.substring(0, maxLength) + '...' : text
);

function Ecommerce() {
  const [products, setProducts] = useState([]);
  const [expandedProductId, setExpandedProductId] = useState(null);
  const maxLength = 150;
  const dispatch=useDispatch()

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);
 
  const handleToggle = (productId) => {
    setExpandedProductId(expandedProductId === productId ? null : productId);
  };

const handleToCart=(product)=>{

dispatch(addtocart(product))
}

  return (<div>
    
    <div className='cart' style={{ width: '100%', display: 'flex', flexWrap: 'wrap', gap: '16px',marginTop:'100px', padding: '16px' }}>
      {products.map(product => (
        <div className='Card' style={{ width: '18rem', border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} key={product.id}>
          <div style={{ padding: '16px' }}>
            <div className='image'>
            <Link to={`/product/${product.id}`} ><img src={product.image} className='Productimage' style={{ width: '100%', height: '200px' }} alt={product.title} /></Link>
            </div>
            <div>
              <p className='Producttitle' style={{ fontWeight: 'bold', margin: '8px 0' }}>{product.title}</p>
            </div>
            <div>
              <p className='Productprice' style={{ color: 'red', fontSize: 'bolder', margin: '8px 0' }}>
                &#x20b9;{product.price}
              </p>
            </div>
            <div>
              <p className='Productdescription' style={{ color: '#555', margin: '8px 0' }}>
                {expandedProductId === product.id
                  ? product.description
                  : truncateText(product.description, maxLength)
                }
                {product.description.length > maxLength && (
                  <button onClick={() => handleToggle(product.id)} className='ReadMoreButton' >
                   {expandedProductId === product.id ? 'Read Less' : 'Read More'}
                  </button>
                )}
              </p>
            </div>
            <button className='Productadd' style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }} onClick={()=>handleToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}

export default Ecommerce;