import axios from 'axios';

const defaultPort = 3001;

const port = process.env.REACT_APP_BACKEND_PORT || defaultPort;

const api = axios.create({
  baseURL: `http://localhost:${port}`,
  //   baseURL: 'http://localhost:3001',
});

export const validateLogin = async (email, password) => {
  const result = await api.post('/login', { email, password });
  return result.data;
};
export const validateLgin = (data) => api.post('/login', data);
