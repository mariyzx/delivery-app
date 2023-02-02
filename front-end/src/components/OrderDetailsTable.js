import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getOrderById } from '../services/api';
import MainOrder from '../styles/components/OrderDetailsTable';
import TableCheckout from '../styles/components/Table';
import { Total } from '../styles/pages/Checkout';

function OrderDetailsTable() {
  const [orderDetails, setOrderDetails] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [formattedPrice, setFormattedPrice] = useState();
  const [orderStatus, setOrderStatus] = useState();
  const history = useHistory();

  const dataTest = (name, index) => {
    const data = `customer_order_details__element-order-details-label-${name}-${index}`;
    return data;
  };

  const dataTestId = (name) => {
    const data = `customer_order_details__element-order-details-label-${name}`;
    return data;
  };

  const formatDate = (fullDate) => {
    const date = new Date(fullDate);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  };

  useEffect(() => {
    const getOrder = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const finalOrder = JSON.parse(localStorage.getItem('cart'));
      const orderId = JSON.parse(localStorage.getItem('saleId'));
      const result = await getOrderById(orderId, token);
      setOrderDetails(result);
      setProductsList(finalOrder);
      setFormattedPrice(result.totalPrice.replace('.', ','));
      setOrderStatus(result.status);
    };
    getOrder();
  }, []);

  return (
    <MainOrder>
      <h1>Detalhe Pedido</h1>
      {productsList.length === 0 ? <p>Nenhum pedido cadastrado</p> : (
        <TableCheckout>
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
                {orderStatus}
              </th>
              <th
                data-testid={ dataTest('delivery-status', orderDetails.id) }
              >
                <button
                  // onClick={ updateStatus }
                  type="button"
                  data-testid="customer_order_details__button-delivery-check"
                  disabled
                  className="deliveredButton"
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
              </tr>
            ))}
          </tbody>
        </TableCheckout>
      )}
      <Total
        data-testid="customer_order_details__element-order-total-price"
      >
        Total:
        {' '}
        {formattedPrice}
      </Total>
      <button
        type="button"
        onClick={ () => history.goBack() }
      >
        VOLTAR
      </button>
    </MainOrder>
  );
}

export default OrderDetailsTable;
