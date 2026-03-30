# 项目开发日志 (Project Log)

## 2026-03-30: 环境配置与多端同步
- **状态**: 完成
- **配置 Prettier**:
  - **需求**: 统一代码格式，解决格式化规范问题
  - **技术栈**: Prettier, ESLint
  - **解决方案**: 创建 `.prettierrc` 和 `.prettierignore`，并通过 `eslint-config-prettier` 解决与 ESLint 的冲突。
- **修复 Tailwind CSS v4 语法报错**:
  - **需求**: 解决 `globals.css` 中 `@plugin` 指令的编辑器报错
  - **技术栈**: Tailwind CSS v4, VS Code/Trae Settings
  - **解决方案**: 创建 `.vscode/tailwind.json` 注册新指令，配置 `.vscode/settings.json` 忽略未知 At-Rules 检查。
- **配置 Git 多端推送**:
  - **需求**: 提交代码时同时同步到 GitHub 和 Gitee
  - **技术栈**: Git
  - **解决方案**: 使用 `git remote set-url --add --push origin <url>` 为 `origin` 配置了多个 Push 地址（GitHub: `yFan666/w-flow.git`, Gitee: `yFan888/w-flow.git`）。

***

## 2026-03-26: 项目启动
- **状态**: 进行中
- **鸥大人**: 提出了从 0 到 1 构建 Next.js 博客的需求，并建议将逻辑代码移入 `app` 目录。
- **薯tiu**: 确认协作模式，完成第一步内容底层逻辑构建（引入 `gray-matter` 等依赖，创建 `app/posts` 与 `app/lib/posts.ts` 解析逻辑），并已验证解析成功。
- **进度更新**: 首页 (`app/page.tsx`) 开发完成，成功渲染 Markdown 文章列表。
- **技术栈**: Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript.

***
