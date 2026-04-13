import { defineConfig } from "unocss";

export default defineConfig({
  // ...UnoCSS options
  rules: [
    [
      "flex-center",
      { display: "flex", alignItems: "center", justifyContent: "center" },
    ],
  ],
});
