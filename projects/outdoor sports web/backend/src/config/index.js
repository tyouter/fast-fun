/**
 * 配置索引文件
 */

const connectDB = require('./database');
const env = require('./env');

module.exports = {
  connectDB,
  env
};