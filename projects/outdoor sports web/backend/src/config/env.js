/**
 * 环境变量配置
 */

const dotenv = require('dotenv');
const path = require('path');

// 加载环境变量
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

module.exports = {
  // 服务器配置
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 5000,
  
  // 数据库配置
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/outdoor-sports',
  
  // JWT配置
  JWT_SECRET: process.env.JWT_SECRET || 'outdoor-sports-secret-key',
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || '30d',
  JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN || 30,
  
  // 邮件配置
  EMAIL_USERNAME: process.env.EMAIL_USERNAME,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  EMAIL_HOST: process.env.EMAIL_HOST,
  EMAIL_PORT: process.env.EMAIL_PORT,
  EMAIL_FROM: process.env.EMAIL_FROM || 'noreply@outdoorsports.com'
};