import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProvideContext from '../context/ProvideContext';
import { createNewSale } from '../services/api';
import TableCheckout from '../styles/components/Table';
import { DivButtons, Divider, MainCheckout, Total } from '../styles/pages/Checkout';
import { saveToLocal } from '../services/saveToLocalStorage';

function CheckoutCar() {
  const { products, setProducts } = useContext(ProvideContext); //
  const [productsList, setProductsList] = useState(products);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const arrToSalesProducts = [];
  const history = useHistory();

  const removeItem = (item) => {
    const newproducts = productsList.filter((product) => product.name !== item);
    setProductsList(newproducts);
  };

  const calculateProducts = () => productsList.reduce((acc, product) => {
    acc += (product.some * Number(product.price));
    return acc;
  }, 0).toFixed(2).replace('.', ',');

  const sendNewSale = async () => {
    const { id, token } = JSON.parse(localStorage.getItem('user'));
    productsList.forEach((product) => {
      const productToAdd = {
        productId: product.id,
        quantity: product.some,
        token,
      };
      arrToSalesProducts.push(productToAdd);
      return arrToSalesProducts;
    });
    const obj = {
      userId: id,
      sellerId: 2,
      totalPrice: calculateProducts().replace(',', '.'),
      deliveryAddress: address,
      deliveryNumber: number,
    };
    const data = await createNewSale(obj, arrToSalesProducts, token);
    saveToLocal('cart', productsList); // salva lista de produtos do pedido
    saveToLocal('saleId', data.id); // salva id do pedido
    setProducts(productsList);
    history.push(`/customer/orders/${data.id}`);
  };

  useEffect(() => {
    calculateProducts();
  });

  const dataTest = (name, index) => {
    const data = `customer_checkout__element-order-table-${name}-${index}`;
    return data;
  };

  return (
    <MainCheckout>
      <h1>Finalizar Pedido</h1>
      {productsList.length === 0 ? <p>Nenhum pedido cadastrado</p> : (
        <TableCheckout>
          <thead>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
              <th>Remover Item</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map((product, index) => (
              <tr key={ index }>
                <td
                  data-testid={ dataTest('item-number', index) }
                >
                  {Number(index + 1)}
                </td>
                <td
                  data-testid={ dataTest('name', index) }
                >
                  {product.name}
                </td>
                <td
                  data-testid={ dataTest('quantity', index) }
                >
                  {product.some}
                </td>
                <td
                  data-testid={ dataTest('unit-price', index) }
                >
                  {(product.price).replace('.', ',')}
                </td>
                <td
                  data-testid={ dataTest('sub-total', index) }
                >
                  {(product.price * product.some).toFixed(2).replace('.', ',')}
                </td>
                <td
                  data-testid={ dataTest('remove', index) }
                >
                  <button
                    onClick={ () => removeItem(product.name) }
                    type="button"
                    className="removeButton"
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </TableCheckout>
      )}
      <Total
        data-testid="customer_checkout__element-order-total-price"
      >
        Total:
        {' '}
        {calculateProducts()}
      </Total>

      <Divider />

      <h1>Detalhes e endereço para Entrega</h1>

      <span>P. Vendedora Responsavel</span>
      <select
        data-testid="customer_checkout__select-seller"
      >
        <option>Pessoa Vendedora 1</option>
        <option>Pessoa Vendedora 2</option>
      </select>

      <span>Endereço</span>
      <input
        data-testid="customer_checkout__input-address"
        onChange={ ({ target: { value } }) => setAddress(value) }
      />

      <span>Numero</span>
      <input
        data-testid="customer_checkout__input-address-number"
        onChange={ ({ target: { value } }) => setNumber(value) }
      />

      <DivButtons>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ sendNewSale }
        >
          Finalizar Pedido
        </button>
        <button
          type="button"
          onClick={ () => history.goBack() }
        >
          VOLTAR
        </button>
      </DivButtons>
    </MainCheckout>
  );
}

export default CheckoutCar;
