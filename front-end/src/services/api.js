import axios from 'axios';

// const port = process.env.PORT;

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_BACKEND_PORT}`,
//   baseURL: 'http://localhost:3001',
});

export const validateLogin = (data) => api.post('/login', data);
export const validateLgin = (data) => api.post('/login', data);
