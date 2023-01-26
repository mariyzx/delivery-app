const express = require('express')

const registerController = require('../controllers/RegisterControllers')

const route = express.Router();

route.post('/', registerController.registerUser)

module.exports = route;