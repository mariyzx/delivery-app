import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BsCartFill } from 'react-icons/bs';
import Card from './Cards';
import { getAllProducts } from '../services/api';
import ProvideContext from '../context/ProvideContext';
import { DivProducts, Cart, ListProducts } from '../styles/pages/Products';

function CardMap() {
  const [listProduct, setListProduct] = useState([]);
  const [amount, setAmount] = useState([]);
  const [activate, setActivate] = useState(true);
  const { products } = useContext(ProvideContext);
  const redirection = useHistory();

  // console.log(activate);

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user')); // pega token localstorage
    const getProduct = async () => {
      const result = await getAllProducts(token); // adiciona token para o backend
      setListProduct(result);
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
    <DivProducts>
      <h1>Products</h1>
      <ListProducts>
        {
          listProduct.map((product, i) => (
            <div key={ i }>
              <Card products={ product } />
            </div>
          ))
        }
      </ListProducts>
      <Cart>
        <button
          data-testid="customer_products__button-cart"
          type="submit"
          disabled={ activate }
          onClick={ () => redirection.push('/customer/checkout') }
        >
          <BsCartFill />
          {' '}
          R$
          {' '}
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            { `${amount.toString().replace('.', ',')}` }
          </span>
        </button>
      </Cart>
    </DivProducts>
  );
}

export default CardMap;
