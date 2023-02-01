import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3001' });

export const fechProduct = async () => {
  try {
    return await api.get('/products');
  } catch (error) {
    return error.response;
  }
};

export const fechUser = async (setUser) => {
  const user = localStorage.getItem('user');
  setUser(JSON.parse(user));
};
