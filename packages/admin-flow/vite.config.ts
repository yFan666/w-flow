import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
// UnoCSS 插件
import UnoCSS from 'unocss/vite'
// 自动导入 API
import AutoImport from 'unplugin-auto-import/vite'
// 自动导入组件
import Components from 'unplugin-vue-components/vite'
// Naive UI 解析器
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    UnoCSS(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      dts: 'src/auto-imports.d.ts', // TS 支持
    }),
    // 2️⃣ 自动导入组件
    Components({
      resolvers: [NaiveUiResolver()],
      dts: 'src/components.d.ts', // TS 支持
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
