// user가 보는 화면
const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  // console.log('shop.js', adminData.products);
  // res.sendFile(path.join(rootDir, 'views', 'shop.html')); // path.join()은 실행 중인 운영체제를 감지해서 자동으로 올바른 경로를 생성한다.
  const products = adminData.products;
  res.render('shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
    activeAddProduct: true,
    layout: false,
  });
});

module.exports = router;
