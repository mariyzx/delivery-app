const jwt = require('jsonwebtoken');
require('dotenv/config');
const { readFileSync } = require('fs');
const secret = readFileSync('jwt.evaluation.key', 'utf-8');

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;

    if (!token || !secret) return res.status(401).json({ message: 'Token Not Found' });

      const decoded = jwt.verify(token, secret);

      req.body.user = decoded;
      
      next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

module.exports = authMiddleware;