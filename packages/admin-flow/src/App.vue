<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { useThemeStore } from '@/stores/theme'

const thtemeStore = useThemeStore()
</script>

<template>
  <n-config-provider :theme="thtemeStore.isDark ? darkTheme : null">
    <router-view />
  </n-config-provider>
</template>

<style scoped lang="scss"></style>
