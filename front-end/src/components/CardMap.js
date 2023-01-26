import React, { useEffect, useState } from 'react';
import Card from './Cards';
// import { fechProduct } from '../api/featch';

function CardMap() {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    const getProduct = () => {
      // const products = await fechProduct();
      const products = {
        data: [],
      };
      setListProduct(products.data);
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
