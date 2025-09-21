/**
 * 代码生成脚本
 * 用于生成常用的代码模板，如组件、控制器、模型等
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// 项目根目录
const rootDir = path.resolve(__dirname, '..');
const frontendDir = path.join(rootDir, 'frontend');
const backendDir = path.join(rootDir, 'backend');

// 创建readline接口
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * 生成文件
 */
function generateFile(filePath, content) {
  // 确保目录存在
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // 写入文件
  fs.writeFileSync(filePath, content);
  console.log(`文件已生成: ${filePath}`);
}

/**
 * 生成React组件
 */
function generateReactComponent(name, directory = 'components') {
  const componentDir = path.join(frontendDir, 'src', directory, name);
  const componentFile = path.join(componentDir, `${name}.jsx`);
  const indexFile = path.join(componentDir, 'index.js');
  const styleFile = path.join(componentDir, `${name}.module.css`);
  
  // 组件内容
  const componentContent = `import React from 'react';
import PropTypes from 'prop-types';
import styles from './${name}.module.css';

const ${name} = ({ children }) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

${name}.propTypes = {
  children: PropTypes.node
};

export default ${name};
`;

  // 索引文件内容
  const indexContent = `export { default } from './${name}';
`;

  // 样式文件内容
  const styleContent = `.container {
  /* 组件样式 */
}
`;

  // 生成文件
  generateFile(componentFile, componentContent);
  generateFile(indexFile, indexContent);
  generateFile(styleFile, styleContent);
}

/**
 * 生成Express控制器
 */
function generateController(name) {
  const controllerFile = path.join(backendDir, 'src', 'controllers', `${name}.controller.js`);
  
  // 控制器内容
  const controllerContent = `/**
 * ${name} 控制器
 */

const ${name}Service = require('../services/${name}.service');

/**
 * 获取所有${name}
 */
exports.getAll = async (req, res, next) => {
  try {
    const items = await ${name}Service.getAll();
    res.status(200).json({
      success: true,
      data: items
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 获取单个${name}
 */
exports.getOne = async (req, res, next) => {
  try {
    const item = await ${name}Service.getOne(req.params.id);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: '未找到该资源'
      });
    }
    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 创建${name}
 */
exports.create = async (req, res, next) => {
  try {
    const newItem = await ${name}Service.create(req.body);
    res.status(201).json({
      success: true,
      data: newItem
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 更新${name}
 */
exports.update = async (req, res, next) => {
  try {
    const updatedItem = await ${name}Service.update(req.params.id, req.body);
    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        message: '未找到该资源'
      });
    }
    res.status(200).json({
      success: true,
      data: updatedItem
    });
  } catch (error) {
    next(error);
  }
};

/**
 * 删除${name}
 */
exports.delete = async (req, res, next) => {
  try {
    const result = await ${name}Service.delete(req.params.id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: '未找到该资源'
      });
    }
    res.status(204).json({
      success: true,
      data: null
    });
  } catch (error) {
    next(error);
  }
};
`;

  // 生成文件
  generateFile(controllerFile, controllerContent);
  
  // 提示生成对应的服务
  console.log(`提示: 你可能还需要生成对应的服务: generate service ${name}`);
}

/**
 * 生成Express服务
 */
function generateService(name) {
  const serviceFile = path.join(backendDir, 'src', 'services', `${name}.service.js`);
  
  // 服务内容
  const serviceContent = `/**
 * ${name} 服务
 */

const ${name}Model = require('../models/${name}.model');

/**
 * 获取所有${name}
 */
exports.getAll = async () => {
  return await ${name}Model.find();
};

/**
 * 获取单个${name}
 */
exports.getOne = async (id) => {
  return await ${name}Model.findById(id);
};

/**
 * 创建${name}
 */
exports.create = async (data) => {
  return await ${name}Model.create(data);
};

/**
 * 更新${name}
 */
exports.update = async (id, data) => {
  return await ${name}Model.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

/**
 * 删除${name}
 */
exports.delete = async (id) => {
  return await ${name}Model.findByIdAndDelete(id);
};
`;

  // 生成文件
  generateFile(serviceFile, serviceContent);
  
  // 提示生成对应的模型
  console.log(`提示: 你可能还需要生成对应的模型: generate model ${name}`);
}

/**
 * 生成Mongoose模型
 */
function generateModel(name) {
  const modelFile = path.join(backendDir, 'src', 'models', `${name}.model.js`);
  
  // 模型内容
  const modelContent = `/**
 * ${name} 模型
 */

const mongoose = require('mongoose');

const ${name}Schema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '名称是必填项'],
    trim: true,
    maxlength: [50, '名称不能超过50个字符']
  },
  description: {
    type: String,
    trim: true
  },
  // 添加更多字段...
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// 添加索引
${name}Schema.index({ name: 1 });

// 添加中间件
${name}Schema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('${name}', ${name}Schema);
`;

  // 生成文件
  generateFile(modelFile, modelContent);
}

/**
 * 显示帮助信息
 */
function showHelp() {
  console.log(`
代码生成工具使用方法:

  生成React组件:
    node generate.js component <名称> [目录]

  生成Express控制器:
    node generate.js controller <名称>

  生成Express服务:
    node generate.js service <名称>

  生成Mongoose模型:
    node generate.js model <名称>

示例:
  node generate.js component Button ui
  node generate.js controller Product
  node generate.js service Product
  node generate.js model Product
  `);
}

/**
 * 主函数
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args[0] === 'help' || args[0] === '--help') {
    showHelp();
    process.exit(0);
  }
  
  const type = args[0];
  const name = args[1];
  
  if (!name) {
    console.error('错误: 缺少名称参数');
    showHelp();
    process.exit(1);
  }
  
  switch (type) {
    case 'component':
      const directory = args[2] || 'components';
      generateReactComponent(name, directory);
      break;
    case 'controller':
      generateController(name);
      break;
    case 'service':
      generateService(name);
      break;
    case 'model':
      generateModel(name);
      break;
    default:
      console.error(`错误: 未知的生成类型 '${type}'`);
      showHelp();
      process.exit(1);
  }
  
  process.exit(0);
}

// 执行主函数
main();