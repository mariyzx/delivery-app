const express = require('express');
const registerController = require('../controllers/register.controllers');

const route = express.Router();

route.post('/', registerController.registerUser);

module.exports = route;