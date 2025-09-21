```
# 户外运动网站后端

## 概述

这是户外运动网站的后端部分，使用Node.js和Express.js构建，采用MongoDB作为数据库。

## 目录结构

```
backend/
├── src/                 # 源代码
│   ├── api/             # API路由
│   │   ├── v1/          # API版本1
│   │   └── index.js     # API路由入口
│   ├── config/          # 配置文件
│   │   ├── database.js  # 数据库配置
│   │   ├── env.js       # 环境变量配置
│   │   └── index.js     # 配置入口
│   ├── controllers/     # 控制器
│   ├── middlewares/     # 中间件
│   │   ├── auth.js      # 认证中间件
│   │   ├── error.js     # 错误处理中间件
│   │   └── validator.js # 数据验证中间件
│   ├── models/          # 数据模型
│   ├── services/        # 业务逻辑
│   ├── utils/           # 工具函数
│   │   ├── logger.js    # 日志工具
│   │   └── helpers.js   # 辅助函数
│   └── app.js           # 应用入口
├── tests/               # 测试文件
│   ├── unit/            # 单元测试
│   ├── integration/     # 集成测试
│   └── e2e/             # 端到端测试
├── .eslintrc.js         # ESLint配置
├── .prettierrc          # Prettier配置
├── jest.config.js       # Jest测试配置
├── package.json         # 依赖配置
└── README.md            # 说明文档
```

## 开发指南

### 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0 或 yarn >= 1.22.0
- MongoDB >= 4.0.0

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 运行测试

```bash
npm run test
# 或
yarn test
```

## API设计规范

1. RESTful API设计
2. 使用JWT进行身份验证
3. 版本控制（如/api/v1/）
4. 适当的HTTP状态码
5. 统一的响应格式

## 数据库设计

详细的数据库设计请参考 `docs/design/database/` 目录下的文档。

## 错误处理

使用统一的错误处理中间件，确保所有API返回一致的错误格式。

## 日志

使用Winston进行日志记录，区分开发环境和生产环境的日志级别。
```