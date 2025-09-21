/**
 * 应用入口文件
 */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const { env } = require('./config');
const apiRoutes = require('./api');
const { errorHandler } = require('./middlewares');

// 初始化Express应用
const app = express();

// 实现CORS
app.use(cors());
app.options('*', cors());

// 安全HTTP头
app.use(helmet());

// 开发环境日志
if (env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// 请求限制
const limiter = rateLimit({
  max: 100, // 每IP每小时最多100个请求
  windowMs: 60 * 60 * 1000,
  message: '来自此IP的请求过多，请稍后再试'
});
app.use('/api', limiter);

// 请求体解析
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());

// 数据清理
app.use(xss()); // 防止XSS攻击

// 防止参数污染
app.use(hpp({
  whitelist: ['price', 'rating', 'brand', 'category', 'activityType'] // 允许重复的查询参数
}));

// 压缩响应
app.use(compression());

// API路由
app.use('/api', apiRoutes);

// 处理未找到的路由
app.all('*', (req, res, next) => {
  res.status(404).json({
    success: false,
    message: `找不到URL ${req.originalUrl}，请检查API路径`
  });
});

// 全局错误处理
app.use(errorHandler);

module.exports = app;