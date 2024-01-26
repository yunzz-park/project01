// 제품 생성을 처리하는 곳
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// 시작경로를 공유
// admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    fromCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

// admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title }); // 배열에 새로운 객체를 push
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
