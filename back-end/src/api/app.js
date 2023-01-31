const express = require('express');
const cors = require('cors');
const loginRoutes = require('../routers/login.router');
const registerRoutes = require('../routers/register.router');
const adminRoutes = require('../routers/admin.router')

const app = express();
app.use(cors());

app.use(express.json());
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/admin', adminRoutes)

module.exports = app;
