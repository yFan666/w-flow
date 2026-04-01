import { remark } from 'remark'
import html from 'remark-html'
import { httpGet } from '@/lib/http'

export type PostMeta = {
  id: string
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  cover?: string
}

export type Post = PostMeta & {
  contentMd: string
  contentHtml: string
}

export async function getSortedPosts(): Promise<PostMeta[]> {
  return httpGet<PostMeta[]>('/posts')
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const raw = await httpGet<Omit<Post, 'contentHtml'>>(`/posts/${slug}`)
  const processed = await remark().use(html).process(raw.contentMd)
  return {
    ...raw,
    contentHtml: processed.toString(),
  }
}
