/**
 * 错误处理中间件
 */

// 开发环境错误处理
const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    success: false,
    error: err,
    message: err.message,
    stack: err.stack
  });
};

// 生产环境错误处理
const sendErrorProd = (err, res) => {
  // 可操作的错误：发送消息给客户端
  if (err.isOperational) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message
    });
  } 
  // 编程或其他未知错误：不泄露错误详情
  else {
    // 记录错误
    console.error('ERROR 💥', err);
    
    // 发送通用消息
    res.status(500).json({
      success: false,
      message: '出现错误，请稍后再试'
    });
  }
};

// 处理MongoDB重复键错误
const handleDuplicateFieldsDB = err => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  const message = `重复的字段值: ${value}。请使用其他值！`;
  return new AppError(message, 400);
};

// 处理MongoDB验证错误
const handleValidationErrorDB = err => {
  const errors = Object.values(err.errors).map(el => el.message);
  const message = `无效的输入数据。${errors.join('. ')}`;
  return new AppError(message, 400);
};

// 处理JWT错误
const handleJWTError = () => new AppError('无效的令牌，请重新登录', 401);
const handleJWTExpiredError = () => new AppError('您的令牌已过期，请重新登录', 401);

// 自定义错误类
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;
    
    Error.captureStackTrace(this, this.constructor);
  }
}

// 全局错误处理中间件
const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  
  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err };
    error.message = err.message;
    
    // 处理特定类型的错误
    if (error.code === 11000) error = handleDuplicateFieldsDB(error);
    if (error.name === 'ValidationError') error = handleValidationErrorDB(error);
    if (error.name === 'JsonWebTokenError') error = handleJWTError();
    if (error.name === 'TokenExpiredError') error = handleJWTExpiredError();
    
    sendErrorProd(error, res);
  }
};

module.exports = {
  errorHandler,
  AppError
};