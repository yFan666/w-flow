<template>
  <div class="w-full h-full flex-center">
    <n-scrollbar>
      <n-menu :options="menuOptions"></n-menu>
    </n-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { routes } from '@/router/routes'
import type { RouteRecordRaw } from 'vue-router'

const menuOptions = ref([
  {
    key: 'root',
    label: '首页',
    icon: 'home',
  },
])
</script>

<style lang="scss" scoped></style>
