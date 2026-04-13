<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <router-view />
  </n-config-provider>
</template>

<script setup lang="ts">
import type { GlobalTheme, GlobalThemeOverrides } from 'naive-ui'
import { ref } from 'vue'

const theme = ref<GlobalTheme | null>(null)

const themeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily:
      '"Victor Mono Variable", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
    fontFamilyMono:
      '"Victor Mono Variable", "JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
}
</script>

<style lang="scss" scoped>
body {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
