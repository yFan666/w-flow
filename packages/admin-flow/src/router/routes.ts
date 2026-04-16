import Layout from '@/layout/LayoutRoot.vue'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    meta: {
      title: '首页',
    },
    component: () => Layout,
  },
]
