const express = require('express');
const cors = require('cors');
const loginRoutes = require('../routers/login.router');
const registerRoutes = require('../routers/register.router') // +

const app = express();
app.use(cors());
app.use(express.json());

app.use('/login', loginRoutes);
app.use('/register', registerRoutes); // +

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
