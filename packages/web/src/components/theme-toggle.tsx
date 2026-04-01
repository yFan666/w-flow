'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import { Button } from '@/components/ui/button'

type ThemeMode = 'light' | 'dark'

export function ThemeToggle() {
  const glowRef = useRef<HTMLSpanElement>(null)
  const [mode, setMode] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'light'
    const saved = localStorage.getItem('theme-mode') as ThemeMode | null
    if (saved) return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    document.documentElement.classList.toggle('dark', mode === 'dark')
    localStorage.setItem('theme-mode', mode)
  }, [mode])

  const toggleTheme = () => {
    const next = mode === 'dark' ? 'light' : 'dark'
    setMode(next)
  }

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    if (!glowRef.current) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top
    glowRef.current.style.setProperty('--mx', `${x}px`)
    glowRef.current.style.setProperty('--my', `${y}px`)
  }

  return (
    <Button
      size="icon"
      variant="ghost"
      className="group relative overflow-hidden border border-zinc-200 dark:border-zinc-800"
      onClick={toggleTheme}
      onMouseMove={handleMouseMove}
    >
      <span
        ref={glowRef}
        className="pointer-events-none absolute inset-0 rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            mode === 'dark'
              ? 'radial-gradient(80px circle at var(--mx,50%) var(--my,50%), rgba(125, 211, 252, 0.35), rgba(125, 211, 252, 0.08) 35%, transparent 70%)'
              : 'radial-gradient(80px circle at var(--mx,50%) var(--my,50%), rgba(244, 114, 182, 0.35), rgba(244, 114, 182, 0.08) 35%, transparent 70%)',
          filter: 'blur(2px)',
          transition: 'background 220ms ease',
        }}
      />
      {mode === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </Button>
  )
}
