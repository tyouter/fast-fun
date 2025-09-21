/**
 * 用户模型
 */

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, '请提供用户名'],
      trim: true
    },
    email: {
      type: String,
      required: [true, '请提供电子邮箱'],
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, '请提供有效的电子邮箱']
    },
    password: {
      type: String,
      required: [true, '请提供密码'],
      minlength: [8, '密码长度至少为8个字符'],
      select: false
    },
    passwordConfirm: {
      type: String,
      required: [true, '请确认密码'],
      validate: {
        // 此验证器仅在创建和保存时工作
        validator: function(el) {
          return el === this.password;
        },
        message: '密码不匹配'
      }
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user'
    },
    avatar: String,
    phoneNumber: String,
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: String,
      country: String
    },
    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    active: {
      type: Boolean,
      default: true,
      select: false
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// 保存前加密密码
userSchema.pre('save', async function(next) {
  // 仅在密码被修改时运行
  if (!this.isModified('password')) return next();

  // 加密密码
  this.password = await bcrypt.hash(this.password, 12);

  // 删除passwordConfirm字段
  this.passwordConfirm = undefined;
  next();
});

// 保存时更新密码修改时间
userSchema.pre('save', function(next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000; // 减去1秒以确保令牌在密码更改之前创建
  next();
});

// 查询中间件，过滤掉非活跃用户
userSchema.pre(/^find/, function(next) {
  this.find({ active: { $ne: false } });
  next();
});

// 实例方法：检查密码是否正确
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

// 实例方法：检查用户是否在令牌签发后更改了密码
userSchema.methods.changedPasswordAfter = function(JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(this.passwordChangedAt.getTime() / 1000, 10);
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};

// 实例方法：生成密码重置令牌
userSchema.methods.createPasswordResetToken = function() {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10分钟后过期

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;