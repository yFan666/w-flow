import { defineConfig } from 'unocss'

export default defineConfig({
  rules: [
    [
      'flex-center',
      { display: 'flex', justifyContent: 'center', alignItems: 'center' },
    ],
  ],
  // ...UnoCSS options
})
