/**
 * 产品控制器
 */

const { productService } = require('../services');

/**
 * 获取所有产品
 */
const getAllProducts = async (req, res, next) => {
  try {
    // 处理分页和筛选参数
    const { page = 1, limit = 10, sort, ...filters } = req.query;
    
    const products = await productService.getAllProducts({
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      sort,
      filters
    });
    
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 获取单个产品详情
 */
const getProductById = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await productService.getProductById(productId);
    
    res.status(200).json({
      success: true,
      data: product
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 创建新产品（管理员功能）
 */
const createProduct = async (req, res, next) => {
  try {
    const productData = req.body;
    const newProduct = await productService.createProduct(productData);
    
    res.status(201).json({
      success: true,
      message: '产品创建成功',
      data: newProduct
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 更新产品信息（管理员功能）
 */
const updateProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const productData = req.body;
    const updatedProduct = await productService.updateProduct(productId, productData);
    
    res.status(200).json({
      success: true,
      message: '产品更新成功',
      data: updatedProduct
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 删除产品（管理员功能）
 */
const deleteProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    await productService.deleteProduct(productId);
    
    res.status(200).json({
      success: true,
      message: '产品删除成功'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 按类别获取产品
 */
const getProductsByCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.categoryId;
    const { page = 1, limit = 10, sort } = req.query;
    
    const products = await productService.getProductsByCategory(categoryId, {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      sort
    });
    
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 搜索产品
 */
const searchProducts = async (req, res, next) => {
  try {
    const { q, page = 1, limit = 10, sort } = req.query;
    
    const products = await productService.searchProducts(q, {
      page: parseInt(page, 10),
      limit: parseInt(limit, 10),
      sort
    });
    
    res.status(200).json({
      success: true,
      count: products.length,
      data: products
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 添加产品评论
 */
const addProductReview = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const userId = req.user.id;
    const reviewData = {
      ...req.body,
      user: userId
    };
    
    const updatedProduct = await productService.addProductReview(productId, reviewData);
    
    res.status(201).json({
      success: true,
      message: '评论添加成功',
      data: updatedProduct
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByCategory,
  searchProducts,
  addProductReview
};