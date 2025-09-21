/**
 * 产品模型
 */

const mongoose = require('mongoose');

// 产品评论子模式
const reviewSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, '评论必须关联用户']
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: [true, '评论必须包含评分']
    },
    comment: {
      type: String,
      required: [true, '评论内容不能为空']
    }
  },
  { timestamps: true }
);

// 产品模式
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, '产品名称不能为空'],
      trim: true,
      maxlength: [100, '产品名称不能超过100个字符']
    },
    description: {
      type: String,
      required: [true, '产品描述不能为空']
    },
    price: {
      type: Number,
      required: [true, '产品价格不能为空'],
      min: [0, '价格不能为负数']
    },
    discountPrice: {
      type: Number,
      validate: {
        validator: function(val) {
          // 折扣价必须小于原价
          return val < this.price;
        },
        message: '折扣价必须小于原价'
      }
    },
    images: [String],
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, '产品必须属于一个类别']
    },
    brand: {
      type: String,
      required: [true, '产品品牌不能为空']
    },
    stock: {
      type: Number,
      required: [true, '产品库存不能为空'],
      min: [0, '库存不能为负数'],
      default: 0
    },
    activityType: {
      type: String,
      enum: ['徒步', '露营', '攀岩', '骑行', '滑雪', '水上运动', '其他'],
      required: [true, '产品必须关联一个活动类型']
    },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5
    },
    reviews: [reviewSchema],
    tags: [String],
    specifications: {
      type: Map,
      of: String
    },
    isActive: {
      type: Boolean,
      default: true
    },
    isFeatured: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// 虚拟字段：评论数量
productSchema.virtual('numReviews').get(function() {
  return this.reviews.length;
});

// 索引
productSchema.index({ name: 'text', description: 'text', brand: 'text', tags: 'text' });
productSchema.index({ price: 1 });
productSchema.index({ category: 1 });
productSchema.index({ activityType: 1 });

// 中间件
productSchema.pre(/^find/, function(next) {
  this.populate({
    path: 'category',
    select: 'name'
  });
  next();
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;