const jwt = require('jsonwebtoken');
require('dotenv/config');

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;

    if (!token) return res.status(401).json({ message: 'Token Not Found' });

      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret_key');

      req.body.user = decoded;

      next();
  } catch (err) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

module.exports = authMiddleware;