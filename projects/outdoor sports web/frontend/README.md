# 户外运动网站前端

## 概述

这是户外运动网站的前端部分，使用React和Next.js构建，采用Tailwind CSS进行样式设计。

## 目录结构

```
frontend/
├── public/              # 静态资源
│   ├── favicon.ico      # 网站图标
│   └── images/          # 图片资源
├── src/                 # 源代码
│   ├── assets/          # 资源文件(图片、字体等)
│   ├── components/      # 可复用组件
│   │   ├── common/      # 通用组件
│   │   ├── layout/      # 布局相关组件
│   │   └── ui/          # UI组件
│   ├── layouts/         # 布局组件
│   ├── pages/           # 页面组件
│   ├── services/        # API服务
│   ├── store/           # 状态管理
│   ├── styles/          # 全局样式
│   ├── utils/           # 工具函数
│   └── App.js           # 应用入口
├── .eslintrc.js         # ESLint配置
├── .prettierrc          # Prettier配置
├── next.config.js       # Next.js配置
├── tailwind.config.js   # Tailwind配置
├── package.json         # 依赖配置
└── README.md            # 说明文档
```

## 开发指南

### 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0 或 yarn >= 1.22.0

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

### 代码规范

项目使用ESLint和Prettier进行代码规范检查和格式化。

```bash
# 检查代码
npm run lint

# 格式化代码
npm run format
```

## 组件开发规范

1. 组件应遵循单一职责原则
2. 使用函数式组件和React Hooks
3. 组件文件结构应包含：
   - 组件文件 (.jsx/.tsx)
   - 样式文件 (如果需要)
   - 测试文件
   - index.js 导出文件

## 状态管理

项目使用Redux进行全局状态管理，对于简单的组件内状态，使用React的useState和useContext。

## 路由管理

使用Next.js的文件系统路由。

## API调用

使用Axios进行API调用，所有API服务应放在`services`目录下。