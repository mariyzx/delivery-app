const express = require('express');
const cors = require('cors');
const loginRoutes = require('../routes/login.routes');
const routers = require('../routers/register.router');
const productsRoutes = require('../routes/products.routes');
const salesRoutes = require('../routes/sales.routes');

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static('public')); // necessario para renderizar as imagens de produtos

app.use('/login', loginRoutes);
app.use('/customer/products', productsRoutes);
app.use('/sales', salesRoutes);
app.use('/register', routers);

module.exports = app;
