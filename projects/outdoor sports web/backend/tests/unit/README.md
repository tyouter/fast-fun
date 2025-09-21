# 单元测试

此目录包含所有后端单元测试。单元测试主要测试单个函数或类的功能，不涉及外部依赖如数据库或API调用。

## 目录结构

```
unit/
├── controllers/       # 控制器测试
├── services/          # 服务测试
├── middlewares/       # 中间件测试
└── utils/             # 工具函数测试
```

## 运行测试

```bash
npm test -- --testPathPattern=unit
```