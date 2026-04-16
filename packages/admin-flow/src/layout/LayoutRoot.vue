<template>
  <n-layout class="w-full h-100vh flex-center" has-sider>
    <n-layout-sider
      collapse-mode="width"
      :collapsed-width="120"
      :width="240"
      show-trigger="arrow-circle"
      content-style="padding: 24px;"
      bordered
    >
      <Sider />
    </n-layout-sider>
    <n-layout>
      <n-layout-header bordered class="h-15 shrink-0">
        <Header />
      </n-layout-header>
      <n-layout-content class="flex-1">
        <Content />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup lang="ts">
import Header from '@/layout/components/LayoutHeader.vue'
import Content from '@/layout/components/LayoutContent.vue'
import Sider from '@/layout/components/LayoutSider.vue'
</script>

<style lang="scss" scoped></style>
