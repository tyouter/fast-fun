/**
 * 产品路由
 */

const express = require('express');
const { productController } = require('../../controllers');
const { authMiddleware } = require('../../middlewares');

const router = express.Router();

// 公开路由
router.get('/', productController.getAllProducts);
router.get('/search', productController.searchProducts);
router.get('/category/:categoryId', productController.getProductsByCategory);
router.get('/:id', productController.getProductById);

// 需要认证的路由
router.post('/', authMiddleware.protect, authMiddleware.restrictTo('admin'), productController.createProduct);
router.put('/:id', authMiddleware.protect, authMiddleware.restrictTo('admin'), productController.updateProduct);
router.delete('/:id', authMiddleware.protect, authMiddleware.restrictTo('admin'), productController.deleteProduct);
router.post('/:id/reviews', authMiddleware.protect, productController.addProductReview);

module.exports = router;