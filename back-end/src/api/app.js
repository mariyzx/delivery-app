const express = require('express');
const cors = require('cors');
const routers = require('../routers/register.router');

const app = express();
app.use(cors());

app.use(express.json());
app.use('/register', routers);

module.exports = app;
