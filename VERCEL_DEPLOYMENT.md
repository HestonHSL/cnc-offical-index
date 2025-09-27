# Vercel 部署指南

## 项目配置

本项目已经配置好了 Vercel 部署所需的文件：

### 1. vercel.json
- 配置了构建命令：`pnpm build`
- 输出目录：`dist`
- 配置了 SPA 路由重写规则
- 设置了静态资源缓存策略

### 2. .vercelignore
- 排除了不需要部署的文件和目录
- 包括 node_modules、开发文件、IDE 配置等

### 3. package.json
- 添加了 `vercel-build` 脚本
- 确保使用 pnpm 作为包管理器

## 部署步骤

### 方法一：通过 Vercel CLI
1. 安装 Vercel CLI：
   ```bash
   npm i -g vercel
   ```

2. 在项目根目录登录 Vercel：
   ```bash
   vercel login
   ```

3. 部署项目：
   ```bash
   vercel
   ```

4. 生产环境部署：
   ```bash
   vercel --prod
   ```

### 方法二：通过 Vercel Dashboard
1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 导入你的 Git 仓库
4. Vercel 会自动检测到 Umi 项目并应用配置

## 环境变量

如果需要环境变量，在 Vercel Dashboard 的 Project Settings > Environment Variables 中添加。

## 自定义域名

1. 在 Vercel Dashboard 中进入项目设置
2. 在 "Domains" 部分添加你的自定义域名
3. 按照提示配置 DNS 记录

## 构建配置

- **Framework Preset**: Other
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Install Command**: `pnpm install`

## 注意事项

1. 确保所有依赖都在 `dependencies` 中，而不是 `devDependencies`
2. 如果使用 TypeScript，确保 `tsconfig.json` 配置正确
3. 静态资源路径应该是相对路径
4. 如果使用环境变量，确保在 Vercel 中正确配置

## 故障排除

如果部署失败，检查：
1. 构建日志中的错误信息
2. 确保所有图标都使用有效的 FontAwesome 名称
3. 检查 Tailwind CSS 配置是否正确
4. 确保 TypeScript 编译没有错误
