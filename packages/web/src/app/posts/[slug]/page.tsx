import { getPostBySlug } from '@/app/lib/posts'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        返回首页
      </Link>

      <article>
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-500 text-sm">
            <time dateTime={post.date}>{post.date}</time>
            <div className="flex gap-2">
              {post.tags.map((tag) => (
                <span key={tag} className="text-blue-600">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {post.cover && (
          <div className="mb-10 aspect-video w-full overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-lg prose-blue mx-auto"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </article>
    </main>
  )
}
