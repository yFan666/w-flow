import Link from 'next/link'
import { getSortedPosts } from '@/app/lib/posts'

export async function PostsListView() {
  const allPosts = await getSortedPosts()

  return (
    <main className="mx-auto w-full max-w-4xl px-8 py-12">
      <header className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">文章</h1>
        <p className="mt-2 text-zinc-500">记录生活，分享技术，用代码改变世界。</p>
      </header>

      <section className="space-y-6">
        {allPosts.map((post) => (
          <article
            key={post.slug}
            className="group rounded-xl border border-zinc-200 bg-white p-6 transition hover:shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="mb-3 flex items-center gap-4 text-xs text-zinc-500">
              <time dateTime={post.date}>{post.date}</time>
              <div className="flex gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-zinc-100 px-2.5 py-1 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <h2 className="text-2xl font-semibold group-hover:text-blue-600">
              <Link href={`/posts/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
          </article>
        ))}
      </section>
    </main>
  )
}
