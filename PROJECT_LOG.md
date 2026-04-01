# PROJECT_LOG

## 2026-04-01 节点1：目标定义

- 使用 Monorepo（packages/web + packages/server + packages/shared）
- 后端 NestJS + MySQL（Docker 持久化）
- 文章以 Markdown 文本存入 posts 表
- 前端通过 API 拉取并展示，不再直接读取本地 md 文件

## 2026-04-01 节点2：后端基础设施

- [x] Docker MySQL 启动成功
- [x] 本地数据目录持久化生效
- [x] Nest 连接 MySQL 成功

## 2026-04-01 节点3：文章模块

- [x] posts 表创建
- [x] POST /api/posts 可写入
- [x] GET /api/posts、GET /api/posts/:slug 可读取

## 2026-04-01 节点4：前端对接

- [ ] 封装请求层
- [ ] 列表页改为后端数据源
- [ ] 详情页改为后端数据源

## 2026-04-01 节点5：验收

- [x] 从前端能看到数据库中的文章
- [ ] 重启容器后数据仍在

## 2026-04-01 节点6：问题排查记录（POST 写入失败）

- 现象：POST /api/posts 返回 500，中文标题/摘要写入失败
- 根因：MySQL 表默认字符集为 latin1，无法写入中文
- 处理：
  - 设置 TypeORM 连接 charset/collation 为 utf8mb4
  - 设置 docker-compose MySQL 启动参数 character-set-server/collation-server 为 utf8mb4
  - 执行 ALTER TABLE posts CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci
- 结果：已成功写入示例数据 slug=hello-db-2

## 2026-04-01 节点7：Web 导航与主题 UI 改造（shadcn/ui）

- 新增 shadcn/ui 基础依赖：class-variance-authority、clsx、tailwind-merge
- 新增组件目录：`src/components/ui`，并创建 `Button` 基础组件
- 新增左侧菜单（文章、标签、图片）与菜单底部深浅色切换
- 路由改造：
  - `/` 作为首页（布局主页）
  - `/posts` 作为文章列表子页面
  - `/tags`、`/gallery` 先提供占位空页面
- 目录组织改造：新增 `src/views`，页面只保留路由职责，展示逻辑下沉到 views
- 字体方案：引入 `Noto Serif SC`，风格贴近参考博客的阅读型排版
