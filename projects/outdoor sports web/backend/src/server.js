/**
 * 服务器启动文件
 */

const { env, connectDB } = require('./config');
const app = require('./app');

// 处理未捕获的异常
process.on('uncaughtException', err => {
  console.error('未捕获的异常！正在关闭...');
  console.error(err.name, err.message);
  process.exit(1);
});

// 连接数据库
connectDB().then(() => {
  // 启动服务器
  const server = app.listen(env.PORT, () => {
    console.log(`服务器在${env.NODE_ENV}模式下运行，端口: ${env.PORT}`);
  });

  // 处理未处理的Promise拒绝
  process.on('unhandledRejection', err => {
    console.error('未处理的Promise拒绝！正在关闭...');
    console.error(err.name, err.message);
    server.close(() => {
      process.exit(1);
    });
  });
});