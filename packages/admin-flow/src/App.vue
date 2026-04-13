<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { useThemeStore } from '@/stores/theme'

const themeStore = useThemeStore()
</script>

<template>
  <n-config-provider :theme="themeStore.isDark ? darkTheme : null">
    <router-view />
  </n-config-provider>
</template>

<style scoped lang="scss"></style>
