const express = require('express');
const cors = require('cors');
const loginRoutes = require('../routers/login.router');

const app = express();
app.use(cors());
app.use(express.json());
app.use(cors());
app.use('/login', loginRoutes);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
