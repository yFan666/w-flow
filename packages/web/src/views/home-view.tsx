import Link from 'next/link'

export function HomeView() {
  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center px-8 py-16">
      <p className="mb-4 text-sm tracking-[0.2em] text-zinc-500">
        NOW / WRITING
      </p>
      <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
        欢迎来到鸥大人的博客
      </h1>
      <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300">
        这里记录技术成长、生活手记与持续创作。主站结构已升级为侧边菜单，文章内容在子页面维护。
      </p>
      <div className="mt-10 flex gap-3">
        <Link
          href="/posts"
          className="rounded-md bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
        >
          进入文章页
        </Link>
        <Link
          href="/tags"
          className="rounded-md border border-zinc-300 px-5 py-2.5 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
        >
          查看标签
        </Link>
      </div>
    </main>
  )
}
