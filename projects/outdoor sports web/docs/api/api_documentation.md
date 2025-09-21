# 户外运动网站API文档

## 概述

本文档描述了户外运动网站的API接口规范，包括认证方式、请求格式、响应格式以及各个端点的详细说明。

## 基本信息

- **基础URL**: `https://api.outdoorsports.com/api/v1`
- **内容类型**: `application/json`
- **字符编码**: UTF-8

## 认证

所有API请求都需要通过JWT认证，除了公开的端点（如登录、注册）。

### 认证方式

在请求头中添加`Authorization`字段，格式为：

```
Authorization: Bearer {token}
```

### 获取令牌

```
POST /users/login
```

请求体：

```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

响应：

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "data": {
    "user": {
      "id": "60d21b4667d0d8992e610c85",
      "name": "John Doe",
      "email": "user@example.com",
      "role": "user"
    }
  }
}
```

## 响应格式

所有API响应都遵循以下格式：

### 成功响应

```json
{
  "success": true,
  "data": { ... },  // 响应数据，可能是对象或数组
  "count": 10,      // 如果返回数组，则包含数组长度
  "message": "操作成功"  // 可选的成功消息
}
```

### 错误响应

```json
{
  "success": false,
  "message": "错误描述",  // 错误消息
  "error": { ... }       // 开发环境中包含详细错误信息
}
```

## 错误码

| 状态码 | 描述 |
| --- | --- |
| 200 | 成功 |
| 201 | 创建成功 |
| 400 | 错误请求 |
| 401 | 未授权 |
| 403 | 禁止访问 |
| 404 | 资源不存在 |
| 500 | 服务器错误 |

## API端点

### 产品API

#### 获取产品列表

```
GET /products
```

查询参数：

| 参数 | 类型 | 描述 |
| --- | --- | --- |
| page | Number | 页码，默认为1 |
| limit | Number | 每页数量，默认为10 |
| sort | String | 排序字段和顺序，如"price:desc" |
| minPrice | Number | 最低价格筛选 |
| maxPrice | Number | 最高价格筛选 |
| brand | String | 品牌筛选 |
| activityType | String | 活动类型筛选 |

响应：

```json
{
  "success": true,
  "count": 10,
  "data": [
    {
      "id": "60d21b4667d0d8992e610c85",
      "name": "户外登山背包",
      "description": "轻便耐用的登山背包",
      "price": 299.99,
      "brand": "探路者",
      "activityType": "徒步",
      "rating": 4.5,
      "numReviews": 12
    },
    // 更多产品...
  ]
}
```

#### 获取单个产品

```
GET /products/:id
```

响应：

```json
{
  "success": true,
  "data": {
    "id": "60d21b4667d0d8992e610c85",
    "name": "户外登山背包",
    "description": "轻便耐用的登山背包",
    "price": 299.99,
    "discountPrice": 249.99,
    "brand": "探路者",
    "activityType": "徒步",
    "rating": 4.5,
    "numReviews": 12,
    "images": ["image1.jpg", "image2.jpg"],
    "category": {
      "id": "60d21b4667d0d8992e610c86",
      "name": "背包"
    },
    "stock": 50,
    "specifications": {
      "容量": "40L",
      "重量": "1.2kg",
      "材质": "尼龙"
    },
    "reviews": [
      {
        "user": {
          "id": "60d21b4667d0d8992e610c87",
          "name": "张三"
        },
        "rating": 5,
        "comment": "非常好用的背包，强烈推荐！",
        "createdAt": "2023-06-15T08:30:00.000Z"
      }
      // 更多评论...
    ]
  }
}
```

#### 创建产品（管理员）

```
POST /products
```

请求体：

```json
{
  "name": "户外登山背包",
  "description": "轻便耐用的登山背包",
  "price": 299.99,
  "discountPrice": 249.99,
  "brand": "探路者",
  "activityType": "徒步",
  "images": ["image1.jpg", "image2.jpg"],
  "category": "60d21b4667d0d8992e610c86",
  "stock": 50,
  "specifications": {
    "容量": "40L",
    "重量": "1.2kg",
    "材质": "尼龙"
  },
  "tags": ["登山", "徒步", "背包"]
}
```

响应：

```json
{
  "success": true,
  "message": "产品创建成功",
  "data": { ... } // 创建的产品信息
}
```

#### 更新产品（管理员）

```
PUT /products/:id
```

请求体：

```json
{
  "price": 279.99,
  "stock": 45
}
```

响应：

```json
{
  "success": true,
  "message": "产品更新成功",
  "data": { ... } // 更新后的产品信息
}
```

#### 删除产品（管理员）

```
DELETE /products/:id
```

响应：

```json
{
  "success": true,
  "message": "产品删除成功"
}
```

#### 添加产品评论

```
POST /products/:id/reviews
```

请求体：

```json
{
  "rating": 5,
  "comment": "非常好用的背包，强烈推荐！"
}
```

响应：

```json
{
  "success": true,
  "message": "评论添加成功",
  "data": { ... } // 更新后的产品信息
}
```

### 用户API

[待补充]

### 分类API

[待补充]

### 订单API

[待补充]

## 数据模型

详细的数据模型请参考 `docs/design/database/schema.md`

## 更新日志

| 版本 | 日期 | 描述 |
| --- | --- | --- |
| v1.0 | 2023-XX-XX | 初始版本 |

## 附录

[待补充]