/**
 * 认证中间件
 */

const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { User } = require('../models');

/**
 * 保护路由 - 验证用户是否已登录
 */
const protect = async (req, res, next) => {
  try {
    // 1) 获取令牌
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    } else if (req.cookies && req.cookies.jwt) {
      token = req.cookies.jwt;
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: '您未登录，请先登录以获取访问权限'
      });
    }

    // 2) 验证令牌
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    // 3) 检查用户是否仍然存在
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.status(401).json({
        success: false,
        message: '此令牌所属的用户不再存在'
      });
    }

    // 4) 检查用户是否在令牌签发后更改了密码
    if (currentUser.changedPasswordAfter(decoded.iat)) {
      return res.status(401).json({
        success: false,
        message: '用户最近更改了密码，请重新登录'
      });
    }

    // 将用户信息添加到请求对象
    req.user = currentUser;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: '认证失败，请重新登录',
      error: error.message
    });
  }
};

/**
 * 限制访问 - 仅允许特定角色访问
 */
const restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: '您没有执行此操作的权限'
      });
    }
    next();
  };
};

module.exports = {
  protect,
  restrictTo
};