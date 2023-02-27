const express = require('express');
const registerController = require('../controllers/register.controllers');

const router = express.Router();

router.post('/', registerController.registerUser);

module.exports = router;