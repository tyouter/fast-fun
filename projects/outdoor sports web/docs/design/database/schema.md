# 数据库设计

## 数据库概述

户外运动网站使用MongoDB作为数据库，采用文档型数据库的设计。MongoDB是一个基于分布式文件存储的开源数据库系统，它的数据结构是由键值对组成的文档，类似于JSON对象。

## 数据库集合

### 用户集合（Users）

存储用户信息，包括用户的基本信息、认证信息和权限信息。

```javascript
{
  _id: ObjectId,
  username: String,          // 用户名
  email: String,             // 电子邮件
  password: String,          // 密码（加密存储）
  firstName: String,         // 名
  lastName: String,          // 姓
  avatar: String,            // 头像URL
  role: String,              // 角色（user, admin, etc.）
  status: String,            // 状态（active, inactive, banned, etc.）
  preferences: {             // 用户偏好
    language: String,        // 语言
    theme: String,           // 主题
    notifications: Boolean   // 是否接收通知
  },
  address: {                 // 地址
    street: String,          // 街道
    city: String,            // 城市
    state: String,           // 州/省
    country: String,         // 国家
    zipCode: String          // 邮编
  },
  phone: String,             // 电话
  birthDate: Date,           // 出生日期
  registrationDate: Date,    // 注册日期
  lastLogin: Date,           // 最后登录时间
  resetPasswordToken: String, // 重置密码令牌
  resetPasswordExpires: Date, // 重置密码令牌过期时间
  verificationToken: String,  // 验证令牌
  isVerified: Boolean,        // 是否已验证
  createdAt: Date,           // 创建时间
  updatedAt: Date            // 更新时间
}
```

### 产品集合（Products）

存储产品信息，包括产品的基本信息、分类信息和价格信息。

```javascript
{
  _id: ObjectId,
  name: String,              // 产品名称
  description: String,       // 产品描述
  price: Number,             // 产品价格
  salePrice: Number,         // 促销价格
  currency: String,          // 货币单位
  category: String,          // 产品分类
  subcategory: String,       // 产品子分类
  brand: String,             // 品牌
  images: [String],          // 产品图片URL数组
  features: [String],        // 产品特点
  specifications: {          // 产品规格
    weight: Number,          // 重量
    dimensions: {            // 尺寸
      length: Number,        // 长
      width: Number,         // 宽
      height: Number         // 高
    },
    color: String,           // 颜色
    material: String,        // 材质
    // 其他规格...
  },
  stock: Number,             // 库存数量
  sku: String,               // 库存单位
  barcode: String,           // 条形码
  isActive: Boolean,         // 是否激活
  isFeatured: Boolean,       // 是否推荐
  isOnSale: Boolean,         // 是否促销
  tags: [String],            // 标签
  reviews: [                 // 评论
    {
      userId: ObjectId,      // 用户ID
      rating: Number,        // 评分
      comment: String,       // 评论内容
      date: Date             // 评论日期
    }
  ],
  rating: {