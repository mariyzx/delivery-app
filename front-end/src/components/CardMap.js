import React, { useEffect, useState } from 'react';
import Card from './Cards';
import { getAllProducts } from '../services/api';
// import { fechProduct } from '../api/featch';

function CardMap() {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user')); // pega token localstorage
    const getProduct = async () => {
      const products = await getAllProducts(token); // adiciona token para o backend
      setListProduct(products);
    };
    getProduct();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div>
        {
          listProduct.map((product, i) => (
            <div key={ i }>
              <Card products={ product } />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CardMap;
