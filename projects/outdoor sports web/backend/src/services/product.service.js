/**
 * 产品服务
 */

const { Product } = require('../models');

/**
 * 获取所有产品
 */
const getAllProducts = async ({ page, limit, sort, filters }) => {
  try {
    // 构建查询条件
    const query = {};
    
    // 添加筛选条件
    if (filters) {
      // 处理价格范围筛选
      if (filters.minPrice || filters.maxPrice) {
        query.price = {};
        if (filters.minPrice) query.price.$gte = parseFloat(filters.minPrice);
        if (filters.maxPrice) query.price.$lte = parseFloat(filters.maxPrice);
      }
      
      // 处理品牌筛选
      if (filters.brand) {
        query.brand = filters.brand;
      }
      
      // 处理活动类型筛选
      if (filters.activityType) {
        query.activityType = filters.activityType;
      }
    }
    
    // 构建排序条件
    const sortOptions = {};
    if (sort) {
      const [field, order] = sort.split(':');
      sortOptions[field] = order === 'desc' ? -1 : 1;
    } else {
      // 默认按创建时间降序排列
      sortOptions.createdAt = -1;
    }
    
    // 执行查询
    const products = await Product.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit);
    
    return products;
  } catch (error) {
    throw new Error(`获取产品列表失败: ${error.message}`);
  }
};

/**
 * 获取单个产品详情
 */
const getProductById = async (productId) => {
  try {
    const product = await Product.findById(productId);
    
    if (!product) {
      throw new Error('产品不存在');
    }
    
    return product;
  } catch (error) {
    throw new Error(`获取产品详情失败: ${error.message}`);
  }
};

/**
 * 创建新产品
 */
const createProduct = async (productData) => {
  try {
    const newProduct = new Product(productData);
    await newProduct.save();
    
    return newProduct;
  } catch (error) {
    throw new Error(`创建产品失败: ${error.message}`);
  }
};

/**
 * 更新产品信息
 */
const updateProduct = async (productId, productData) => {
  try {
    const product = await Product.findById(productId);
    
    if (!product) {
      throw new Error('产品不存在');
    }
    
    // 更新产品信息
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { $set: productData },
      { new: true, runValidators: true }
    );
    
    return updatedProduct;
  } catch (error) {
    throw new Error(`更新产品失败: ${error.message}`);
  }
};

/**
 * 删除产品
 */
const deleteProduct = async (productId) => {
  try {
    const product = await Product.findById(productId);
    
    if (!product) {
      throw new Error('产品不存在');
    }
    
    await Product.findByIdAndDelete(productId);
    
    return true;
  } catch (error) {
    throw new Error(`删除产品失败: ${error.message}`);
  }
};

/**
 * 按类别获取产品
 */
const getProductsByCategory = async (categoryId, { page, limit, sort }) => {
  try {
    // 构建排序条件
    const sortOptions = {};
    if (sort) {
      const [field, order] = sort.split(':');
      sortOptions[field] = order === 'desc' ? -1 : 1;
    } else {
      // 默认按创建时间降序排列
      sortOptions.createdAt = -1;
    }
    
    // 执行查询
    const products = await Product.find({ category: categoryId })
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit);
    
    return products;
  } catch (error) {
    throw new Error(`获取分类产品失败: ${error.message}`);
  }
};

/**
 * 搜索产品
 */
const searchProducts = async (searchTerm, { page, limit, sort }) => {
  try {
    // 构建排序条件
    const sortOptions = {};
    if (sort) {
      const [field, order] = sort.split(':');
      sortOptions[field] = order === 'desc' ? -1 : 1;
    } else {
      // 默认按创建时间降序排列
      sortOptions.createdAt = -1;
    }
    
    // 构建搜索条件 (使用正则表达式进行模糊匹配)
    const searchRegex = new RegExp(searchTerm, 'i');
    const query = {
      $or: [
        { name: searchRegex },
        { description: searchRegex },
        { brand: searchRegex },
        { tags: searchRegex }
      ]
    };
    
    // 执行查询
    const products = await Product.find(query)
      .sort(sortOptions)
      .skip((page - 1) * limit)
      .limit(limit);
    
    return products;
  } catch (error) {
    throw new Error(`搜索产品失败: ${error.message}`);
  }
};

/**
 * 添加产品评论
 */
const addProductReview = async (productId, reviewData) => {
  try {
    const product = await Product.findById(productId);
    
    if (!product) {
      throw new Error('产品不存在');
    }
    
    // 添加评论到产品
    product.reviews.push(reviewData);
    
    // 更新产品评分
    if (reviewData.rating) {
      const totalRatings = product.reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
      product.rating = totalRatings / product.reviews.length;
    }
    
    await product.save();
    
    return product;
  } catch (error) {
    throw new Error(`添加产品评论失败: ${error.message}`);
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