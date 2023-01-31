import axios from 'axios';

const defaultPort = 3001;

const port = process.env.REACT_APP_BACKEND_PORT || defaultPort;

const api = axios.create({
  baseURL: `http://localhost:${port}`,
});

export const validateLogin = async (email, password) => {
  const result = await api.post('/login', { email, password });
  return result.data;
};

export const registerNewUser = async (name, email, password) => {
  const result = await api.post('/register', { name, email, password });
  return result.data;
};

export const getAllProducts = async (token) => {
  const apiAuth = axios.create({
    baseURL: `http://localhost:${port}`,
    headers: { authorization: token }, // adiciona token para o backend
  });
  const result = await apiAuth.get('/customer/products');
  return result.data;
};

export const createNewSale = async (data) => {
  const { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, token } = data;
  const apiSale = axios.create({
    baseURL: `http://localhost:${port}`,
    headers: { authorization: token }, // adiciona token para o backend
  });
  const result = await apiSale.post(
    '/customer/orders',
    { userId, sellerId, totalPrice, deliveryAddress, deliveryNumber },
  );
  return result.data;
};

// export const addToSalesProducts = async (data) => {
//   const { productId, quantity } = data;
// }
