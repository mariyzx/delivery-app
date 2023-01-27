const express = require('express');
const cors = require('cors');
const loginRoutes = require('../routers/login.router');
const routers = require('../routers/register.router');
const productsRoutes = require('../routers/product.router'); // + branch liz

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.static('public')); // necessario para renderizar as imagens de produtos

app.use('/login', loginRoutes);
app.use('/register', routers);
app.use('/customer/products', productsRoutes); // + branch liz

module.exports = app;
