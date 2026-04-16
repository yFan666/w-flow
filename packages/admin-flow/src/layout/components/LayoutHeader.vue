<template>
  <div class="header-bar w-full h-full flex items-center justify-between">
    Hello Header
    <div class="p-inline-3">
      <n-button
        size="small"
        circle
        quaternary
        @click="themeStore.toggleTheme()"
      >
        <template #icon>
          <n-icon>
            <WeatherSunny16Regular v-if="themeStore.isDark" />
            <WeatherMoon24Regular v-else />
          </n-icon>
        </template>
      </n-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { WeatherSunny16Regular, WeatherMoon24Regular } from '@vicons/fluent'
import { useThemeStore } from '@/stores/theme'
const themeStore = useThemeStore()
</script>

<style scoped lang="scss">
.header-bar {
  background-color: var(--n-color);
  color: var(--n-text-color);
}
</style>
