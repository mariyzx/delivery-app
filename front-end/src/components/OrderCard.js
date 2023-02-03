import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getAllOrders } from '../services/api';
import { LinkPedido, MainCard } from '../styles/components/OrderCard';

function OrderCard() {
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  const addNumber = (value) => `000${value}`;

  const convertValue = (value) => {
    const result = String(value).replace('.', ',');
    return result;
  };

  const formatDate = (date) => {
    const result = new Date(Date.parse(date));
    return result.toLocaleDateString('pt-BR');
  };

  useEffect(() => {
    const getOrders = async () => {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const result = await getAllOrders(token);
      setOrders(result);
    };
    getOrders();
  }, []);

  return (
    <MainCard>
      <button
        type="button"
        onClick={ () => history.goBack() }
      >
        VOLTAR
      </button>
      {orders.map((order) => (
        <LinkPedido key={ order.id }>
          <Link to={ `/customer/orders/${order.id} ` }>
            <p data-testid={ `customer_orders__element-order-id-${order.id}` }>
              Pedido
              {' '}
              { addNumber(order.id) }
            </p>
            <p data-testid={ `customer_orders__element-delivery-status-${order.id}` }>
              {' '}
              { order.status }
            </p>
            <p>
              {' '}
              <span
                data-testid={ `customer_orders__element-order-date-${order.id}` }
              >
                {formatDate(order.saleDate)}
              </span>
            </p>
            <p data-testid={ `customer_orders__element-card-price-${order.id}` }>
              {' '}
              {`R$ ${convertValue(order.totalPrice)}`}
            </p>
          </Link>
        </LinkPedido>
      ))}
    </MainCard>
  );
}

export default OrderCard;
