const express = require('express');
const adminController = require('../controllers/admin.controller')

const router = express.Router();

router.post('/', adminController.registerAdmin);

module.exports = router