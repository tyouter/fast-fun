/**
 * 中间件索引文件
 */

const authMiddleware = require('./auth');
const { errorHandler, AppError } = require('./error');

module.exports = {
  authMiddleware,
  errorHandler,
  AppError
};