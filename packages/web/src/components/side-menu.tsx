'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FileText, Hash, ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'

const menus = [
  { href: '/posts', label: '文章', icon: FileText },
  { href: '/tags', label: '标签', icon: Hash },
  { href: '/gallery', label: '图片', icon: ImageIcon },
]

export function SideMenu() {
  const pathname = usePathname()

  return (
    <aside className="flex  min-h-screen w-16 shrink-0 flex-col border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <Link href="/" className="my-6 m-auto block">
        <p className="text-lg font-semibold tracking-tight">Gell</p>
      </Link>

      <nav className=" flex flex-col items-center space-y-1">
        {menus.map((menu) => {
          const Icon = menu.icon
          const active =
            pathname === menu.href || pathname.startsWith(`${menu.href}/`)
          return (
            <HoverCard key={menu.href}>
              <HoverCardTrigger>
                <Link
                  href={menu.href}
                  className={cn(
                    'w-12 h-12 flex items-center justify-center gap-2 rounded-md mb-4 transition-colors',
                    active
                      ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900'
                      : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800',
                  )}
                >
                  <Icon size={24} />
                  {/* {menu.label} */}
                </Link>
              </HoverCardTrigger>
              <HoverCardContent
                className="flex flex-col w-12 gap-0.5"
                side="right"
              >
                <div className="font-semibold">{menu.label}</div>
              </HoverCardContent>
            </HoverCard>
          )
        })}
      </nav>

      <div className="mt-auto pt-6">
        <ThemeToggle />
      </div>
    </aside>
  )
}
