const express = require('express');
const loginRoutes = require('../routes/login.routes');
const productsRoutes = require('../routes/products.routes');
const salesRoutes = require('../routes/sales.routes');

const app = express();
app.use(express.json());
app.use('/login', loginRoutes);
app.use('/products', productsRoutes);
app.use('/sales', salesRoutes);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
