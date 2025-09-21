/**
 * 数据库配置
 */

const mongoose = require('mongoose');

// 连接MongoDB数据库
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    
    console.log(`MongoDB连接成功: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`MongoDB连接错误: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;