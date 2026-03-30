import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'app/posts')

export type PostMeta = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  cover?: string
}

export type Post = PostMeta & {
  contentHtml: string
}

// 获取所有文章列表（按时间排序）
export function getSortedPosts(): PostMeta[] {
  // 如果目录不存在，先返回空数组，防止报错
  if (!fs.existsSync(postsDirectory)) return []

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      return {
        slug,
        ...(matterResult.data as Omit<PostMeta, 'slug'>),
      }
    })

  return allPostsData.sort((a, b) => (a.date > b.date ? 1 : -1))
}

// 获取单篇文章详情
export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    slug,
    contentHtml,
    ...(matterResult.data as Omit<PostMeta, 'slug'>),
  }
}
