// 제품 생성을 처리하는 곳
const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// 시작경로를 공유
// admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// admin/products => GET
router.get('/products', adminController.getProducts);

// admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
