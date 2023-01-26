const express = require('express');
const cors = require('cors');
const loginRoutes = require('../routers/login.router');
const routers = require('../routers/register.router');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', loginRoutes);
app.use('/register', routers);

module.exports = app;
