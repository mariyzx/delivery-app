require('dotenv/config');
const jwt = require('jsonwebtoken');
const { readFileSync } = require('fs');
const secret = readFileSync('jwt.evaluation.key', 'utf-8');

const createToken = (data) => {
  const token = jwt.sign({ data }, secret, {
    expiresIn: '1d',
    algorithm: 'HS256',
  });
  return token;
};

module.exports = { createToken };