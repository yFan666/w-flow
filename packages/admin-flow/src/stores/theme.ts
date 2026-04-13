import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const storageKey = 'theme'
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem(storageKey)
    if (savedTheme === 'dark') return true
    if (savedTheme === 'light') return false
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const isDark = ref(getInitialTheme())

  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem(storageKey, isDark.value ? 'dark' : 'light')
  }

  return {
    isDark,
    toggleTheme,
  }
})
