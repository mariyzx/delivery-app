const express = require('express');
const cors = require('cors');
const routers = require('../routers/RegisterRouter')

const app = express();
app.use(cors());

app.use(express.json())
app.use('/register', routers);


module.exports = app;
