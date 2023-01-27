const express = require('express');
const salesController = require('../controllers/sales.controller');
const authMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', authMiddleware, salesController.createSale);

router.get('/', authMiddleware, salesController.getAllSales);

router.get('/:id', authMiddleware, salesController.getSaleById);

router.put('/:id', authMiddleware, salesController.updateSale);

module.exports = router;