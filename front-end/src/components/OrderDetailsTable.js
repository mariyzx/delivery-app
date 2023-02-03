import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOrderById, getProductById, updateOrderStatus } from '../services/api';

function OrderDetailsTable() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [formattedPrice, setFormattedPrice] = useState();
  const [disabled, setDisabled] = useState(true);
  const { id } = useParams();

  const dataTest = (name, index) => {
    const data = `customer_order_details__element-order-details-label-${name}-${index}`;
    return data;
  };

  const dataTestId = (name) => {
    const data = `customer_order_details__element-order-details-label-${name}`;
    return data;
  };

  const formatDate = (date) => {
    const result = new Date(Date.parse(date));
    return result.toLocaleDateString('pt-BR');
  };

  const getAllProducts = useCallback(async (product) => {
    const allProducts = await getProductById(product.productId);
    setProductsList(
      (prevState) => [...prevState, { ...allProducts, quantity: product.quantity }],
    );
  }, []);

  const updateStatus = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const status = 'Entregue';

    await updateOrderStatus(id, status, token);
    const result = await getOrderById(id, token);
    setOrderDetails(result.sale);
    setDisabled(true);
  };

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    const getOrder = async () => {
      const result = await getOrderById(id, token);
      setOrderDetails(result.sale);
      if (result.sale.status === 'Em Trânsito') setDisabled(false);

      result.saleProduct.forEach((product) => getAllProducts(product));

      setFormattedPrice(result.sale.totalPrice.replace('.', ','));
    };
    setProductsList([]);
    getOrder();
  }, [getAllProducts, id]);

  return (
    <div>
      <h1>Detalhe Pedido</h1>
      {productsList.length === 0 ? <p>Nenhum pedido cadastrado</p> : (
        <table>
          <thead>
            <tr>
              <th
                data-testid={ dataTestId('order-id') }
              >
                {`PEDIDO Nº 00${orderDetails.id}`}
              </th>
              <th
                data-testid={ dataTestId('seller-name') }
              >
                P. Vend: Fulana Pereira
              </th>
              <th
                data-testid={ dataTestId('order-date') }
              >
                {formatDate(orderDetails.saleDate)}
              </th>
              <th
                data-testid={ dataTest('delivery-status', orderDetails.id) }
              >
                {orderDetails.status}
              </th>
              <th
                data-testid={ dataTest('delivery-status', orderDetails.id) }
              >
                <button
                  onClick={ updateStatus }
                  type="button"
                  data-testid="customer_order_details__button-delivery-check"
                  disabled={ disabled }
                >
                  Marcar como entregue
                </button>
              </th>
            </tr>
            <tr>
              <th>Item</th>
              <th>Descrição</th>
              <th>Quantidade</th>
              <th>Valor Unitário</th>
              <th>Sub-total</th>
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
                  {product.quantity}
                </td>
                <td
                  data-testid={ dataTest('unit-price', index) }
                >
                  {(product.price).replace('.', ',')}
                </td>
                <td
                  data-testid={ dataTest('sub-total', index) }
                >
                  {(product.price * product.quantity).toFixed(2).replace('.', ',')}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <p
        data-testid="customer_order_details__element-order-total-price"
      >
        Total:
        {' '}
        {formattedPrice}
      </p>
    </div>
  );
}

export default OrderDetailsTable;
