require('dotenv/config');
const jwt = require('jsonwebtoken');

const createToken = (data) => {
  const token = jwt.sign({ data }, process.env.JWT_SECRET || 'secret_key', {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

const validateToken = (token) => {
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');
    return data;
  } catch (error) {
    return { error: 'Expired or invalid token' };
  }
};

module.exports = { createToken, validateToken };