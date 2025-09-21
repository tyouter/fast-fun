/**
 * API路由索引文件
 */

const express = require('express');
const productRoutes = require('./product.routes');

const router = express.Router();

// 产品路由
router.use('/products', productRoutes);

// 将来会添加更多路由
// router.use('/users', userRoutes);
// router.use('/categories', categoryRoutes);
// router.use('/orders', orderRoutes);

module.exports = router;