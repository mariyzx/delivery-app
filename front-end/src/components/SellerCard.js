import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllOrders } from '../services/api';
import { LinkPedido } from '../styles/components/OrderCard';
import { MainSeller } from '../styles/components/SellerCard';

function OrderCard() {
  const [orders, setOrders] = useState([]);

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
  console.log(orders);

  return (
    <MainSeller>
      {orders.map((order) => (
        <LinkPedido key={ order.id }>
          <Link to={ `/seller/orders/${order.id} ` }>
            <p data-testid={ `seller_orders__element-order-id-${order.id}` }>
              Pedido
              {' '}
              { addNumber(order.id) }
            </p>
            <p data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
              {' '}
              { order.status }
            </p>
            <p>
              {' '}
              <span
                data-testid={ `seller_orders__element-order-date-${order.id}` }
              >
                {formatDate(order.saleDate)}
              </span>
            </p>
            <p data-testid={ `seller_orders__element-card-price-${order.id}` }>
              {' '}
              {`R$ ${convertValue(order.totalPrice)}`}
            </p>
            <p data-testid={ `seller_orders__element-card-address-${order.id}` }>
              {' '}
              { `${order.deliveryAddress}, ${order.deliveryNumber}` }
            </p>
          </Link>
        </LinkPedido>
      ))}
    </MainSeller>
  );
}

export default OrderCard;
