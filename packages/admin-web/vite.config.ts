// 导入UnoCSS插件
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

// 自动导入 API
import AutoImport from "unplugin-auto-import/vite";
// 自动导入组件
import Components from "unplugin-vue-components/vite";
// Naive UI 解析器
import { NaiveUiResolver } from "unplugin-vue-components/resolvers";

import vue from "@vitejs/plugin-vue";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    // 1️⃣ 自动导入 API
    AutoImport({
      imports: ["vue", "vue-router"],
      dts: "src/types/auto-imports.d.ts", // TS 支持
    }),
    // 2️⃣ 自动导入组件
    Components({
      resolvers: [NaiveUiResolver()],
      dts: "src/types/components.d.ts", // TS 支持
    }),
  ],
});
