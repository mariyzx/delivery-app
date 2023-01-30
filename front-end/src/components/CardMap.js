import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from './Cards';
import { getAllProducts } from '../services/api';
import ProvideContext from '../context/ProvideContext';

function CardMap() {
  const [listProduct, setListProduct] = useState([]);
  const [amount, setAmount] = useState([]);
  const [activate, setActivate] = useState(true);
  const { products } = useContext(ProvideContext);
  const redirection = useHistory();

  console.log(activate);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user')); // pega token localstorage
    const getProduct = async () => {
      const products = await getAllProducts(token); // adiciona token para o backend
      setListProduct(products);
    };
    getProduct();

    const calculateProducts = () => products.reduce((acc, product) => {
      acc += (product.some * Number(product.price));
      return acc;
    }, 0).toFixed(2);
    setAmount(calculateProducts());

    const activateButton = () => {
      if (products.length !== 0) return setActivate(false);
      return setActivate(true);
    };
    activateButton();
  }, [products]);

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
      <div>
        <button
          data-testid="customer_products__button-cart"
          type="submit"
          disabled={ activate }
          onClick={ () => redirection.push('/customer/checkout') }
        >
          Ver carrinho: R$
          {' '}
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { `${amount.toString().replace('.', ',')}` }
          </span>
        </button>
      </div>
    </div>
  );
}

export default CardMap;
