import React, { useContext, useEffect, useState } from 'react';
import ProvideContext from '../context/ProvideContext';

function CheckoutCar() {
  const { products } = useContext(ProvideContext);
  const [productsList, setProductsList] = useState(products);

  const removeItem = (item) => {
    const newproducts = productsList.filter((product) => product.name !== item);
    setProductsList(newproducts);
  };

  const calculateProducts = () => productsList.reduce((acc, product) => {
    acc += (product.some * Number(product.price));
    return acc;
  }, 0).toFixed(2).replace('.', ',');

  useEffect(() => {
    calculateProducts();
  });

  const dataTest = (name, index) => {
    const data = `customer_checkout__element-order-table-${name}-${index}`;
    return data;
  };

  return (
    <div>
      <h1>Finalizar Pedido</h1>
      {productsList.map((product) => console.log(product))}
      {productsList.length === 0 ? <p>Nenhum pedido cadastrado</p> : (
        <table>
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
                  >
                    Remover
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p
        data-testid="customer_checkout__element-order-total-price"
      >
        Total:
        {' '}
        {calculateProducts()}
      </p>
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
      />

      <span>Numero</span>
      <input
        data-testid="customer_checkout__input-address-number"
      />

      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        // onClick={ sendNewSale }
      >
        Finalizar Pedido
      </button>
    </div>
  );
}

export default CheckoutCar;
