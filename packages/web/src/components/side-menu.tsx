'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, Hash, ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'

const menus = [
  { href: '/posts', label: '文章', icon: FileText },
  { href: '/tags', label: '标签', icon: Hash },
  { href: '/gallery', label: '图片', icon: ImageIcon },
]

export function SideMenu() {
  const pathname = usePathname()

  return (
    <aside className="flex min-h-screen w-64 shrink-0 flex-col border-r border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950">
      <Link href="/" className="mb-6 block px-2">
        <p className="text-lg font-semibold tracking-tight">鸥大人博客</p>
        <p className="text-xs text-zinc-500">岁月漫长，值得等待</p>
      </Link>

      <nav className="space-y-1">
        {menus.map((menu) => {
          const Icon = menu.icon
          const active =
            pathname === menu.href || pathname.startsWith(`${menu.href}/`)
          return (
            <Link
              key={menu.href}
              href={menu.href}
              className={cn(
                'flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors',
                active
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                  : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800',
              )}
            >
              <Icon size={16} />
              {menu.label}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto pt-6">
        <ThemeToggle />
      </div>
    </aside>
  )
}
