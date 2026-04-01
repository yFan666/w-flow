# PROJECT_LOG

## 2026-04-01 节点1：目标定义

- 使用 Monorepo（packages/web + packages/server + packages/shared）
- 后端 NestJS + MySQL（Docker 持久化）
- 文章以 Markdown 文本存入 posts 表
- 前端通过 API 拉取并展示，不再直接读取本地 md 文件

## 2026-04-01 节点2：后端基础设施

- [ ] Docker MySQL 启动成功
- [ ] 本地数据目录持久化生效
- [ ] Nest 连接 MySQL 成功

## 2026-04-01 节点3：文章模块

- [ ] posts 表创建
- [ ] POST /api/posts 可写入
- [ ] GET /api/posts、GET /api/posts/:slug 可读取

## 2026-04-01 节点4：前端对接

- [ ] 封装请求层
- [ ] 列表页改为后端数据源
- [ ] 详情页改为后端数据源

## 2026-04-01 节点5：验收

- [ ] 从前端能看到数据库中的文章
- [ ] 重启容器后数据仍在
