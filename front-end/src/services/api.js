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

export const getAllProducts = async () => {
  const result = await api.get('/customer/products');
  return result.data;
};
