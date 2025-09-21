# 户外运动网站项目

## 项目概述

这是一个专注于户外运动的商业网站项目，旨在为用户提供户外运动相关的信息、产品和服务。网站将包含前端展示层和后端服务层，采用现代化的技术栈和最佳实践进行开发。

## 项目结构

```
/
├── frontend/                # 前端代码
│   ├── public/              # 静态资源
│   ├── src/                 # 源代码
│   │   ├── assets/          # 资源文件(图片、字体等)
│   │   ├── components/      # 可复用组件
│   │   ├── layouts/         # 布局组件
│   │   ├── pages/           # 页面组件
│   │   ├── services/        # API服务
│   │   ├── store/           # 状态管理
│   │   ├── styles/          # 全局样式
│   │   ├── utils/           # 工具函数
│   │   └── App.js           # 应用入口
│   ├── package.json         # 依赖配置
│   └── README.md            # 前端说明文档
│
├── backend/                 # 后端代码
│   ├── src/                 # 源代码
│   │   ├── api/             # API路由
│   │   ├── config/          # 配置文件
│   │   ├── controllers/     # 控制器
│   │   ├── middlewares/     # 中间件
│   │   ├── models/          # 数据模型
│   │   ├── services/        # 业务逻辑
│   │   ├── utils/           # 工具函数
│   │   └── app.js           # 应用入口
│   ├── package.json         # 依赖配置
│   └── README.md            # 后端说明文档
│
├── docs/                    # 项目文档
│   ├── requirements/        # 需求文档
│   │   ├── business/        # 业务需求
│   │   └── technical/       # 技术需求
│   ├── design/              # 设计文档
│   │   ├── architecture/    # 架构设计
│   │   ├── database/        # 数据库设计
│   │   └── ui/              # UI设计
│   ├── api/                 # API文档
│   └── development/         # 开发文档
│
├── scripts/                 # 脚本工具
│   ├── setup.js             # 项目初始化脚本
│   └── generate.js          # 代码生成脚本
│
└── .github/                 # GitHub配置
    └── workflows/           # CI/CD工作流
```

## 技术栈

### 前端
- React.js - 用户界面库
- Next.js - React框架，支持SSR
- Tailwind CSS - 样式框架
- Redux/Context API - 状态管理

### 后端
- Node.js - 运行环境
- Express.js - Web框架
- MongoDB - 数据库
- JWT - 身份验证

## 开发指南

详细的开发指南请参考 `docs/development/` 目录下的文档。

## 需求管理

所有项目需求都将记录在 `docs/requirements/` 目录中，并通过自动化工具将需求转化为代码实现。

## 许可证

[MIT](LICENSE)