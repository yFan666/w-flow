import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', () => {
  const isDark = ref(localStorage.getItem('theme') === 'dark')

  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    console.log('🍟🚀🍟 ~ toggleTheme ~ isDark:', isDark.value)
  }

  return {
    isDark,
    toggleTheme,
  }
})
