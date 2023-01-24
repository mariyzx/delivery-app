const express = require('express');
const loginRoutes = require('../routers/login.router');

const app = express();
app.use(express.json())
app.use('/login', loginRoutes);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
