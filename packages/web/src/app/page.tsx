import Link from 'next/link'
import { getSortedPosts } from './lib/posts'

export default async function Home() {
  // 因为是服务端组件，直接调用读取本地文件的方法
  const allPosts = await getSortedPosts()

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      {/* Hero 区域 */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 mb-4">
          鸥大人的博客
        </h1>
        <p className="text-lg text-gray-600">
          记录生活，分享技术，用代码改变世界。
        </p>
      </header>

      {/* 文章列表 */}
      <section className="space-y-8">
        {allPosts.map((post) => (
          <article
            key={post.slug}
            className="group flex flex-col gap-4 border rounded-2xl p-6 hover:shadow-lg transition-shadow bg-white"
          >
            {post.cover && (
              <div className="aspect-[16/9] w-full overflow-hidden rounded-xl bg-gray-100">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.cover}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            )}

            <div>
              <div className="flex items-center gap-x-4 text-xs mb-2">
                <time dateTime={post.date} className="text-gray-500">
                  {post.date}
                </time>
                <div className="flex gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="relative z-10 rounded-full bg-blue-50 px-3 py-1.5 font-medium text-blue-600 hover:bg-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                <Link href={`/posts/${post.slug}`}>
                  <span className="absolute inset-0" />
                  {post.title}
                </Link>
              </h2>

              <p className="mt-3 text-base text-gray-600 line-clamp-2">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
