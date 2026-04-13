<template>
  <div class="w-full h-full flex items-center justify-between bg-[#f5f5f5]">
    Hello Header
    <div class="p-inline-3">
      <n-button
        size="small"
        circle
        ghost
        color="#cccccc"
        @click="thtemeStore.toggleTheme()"
      >
        <template #icon>
          <n-icon color="#000000">
            <WeatherSunny16Regular v-if="!thtemeStore.isDark" />
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
const thtemeStore = useThemeStore()
</script>

<style scoped lang="scss"></style>
