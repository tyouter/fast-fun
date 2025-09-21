/**
 * 项目初始化脚本
 * 用于初始化项目环境、安装依赖等
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// 项目根目录
const rootDir = path.resolve(__dirname, '..');
const frontendDir = path.join(rootDir, 'frontend');
const backendDir = path.join(rootDir, 'backend');

/**
 * 执行命令并打印输出
 */
function runCommand(command, cwd) {
  console.log(`执行命令: ${command}`);
  try {
    execSync(command, { stdio: 'inherit', cwd });
    return true;
  } catch (error) {
    console.error(`命令执行失败: ${error.message}`);
    return false;
  }
}

/**
 * 创建环境文件
 */
function setupEnvFile() {
  const envExample = path.join(backendDir, '.env.example');
  const envFile = path.join(backendDir, '.env');
  
  if (!fs.existsSync(envFile) && fs.existsSync(envExample)) {
    console.log('创建 .env 文件...');
    fs.copyFileSync(envExample, envFile);
    console.log('.env 文件已创建，请根据需要修改配置');
  }
}

/**
 * 安装依赖
 */
async function installDependencies() {
  console.log('\n=== 安装后端依赖 ===');
  runCommand('npm install', backendDir);
  
  console.log('\n=== 安装前端依赖 ===');
  runCommand('npm install', frontendDir);
}

/**
 * 主函数
 */
async function main() {
  console.log('=== 户外运动网站项目初始化 ===');
  
  // 设置环境文件
  setupEnvFile();
  
  // 安装依赖
  await installDependencies();
  
  console.log('\n=== 初始化完成 ===');
  console.log('可以使用以下命令启动项目:');
  console.log('前端: cd frontend && npm run dev');
  console.log('后端: cd backend && npm run dev');
}

// 执行主函数
main().catch(error => {
  console.error('初始化失败:', error);
  process.exit(1);
});