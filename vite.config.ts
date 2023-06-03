import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'

const baseConfig = {
  plugins: [
    vue(),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vue-router',
        {
          'axios': [
            ['default', 'axios'],
          ],
        },
      ],
      defaultExportByFilename: false,
      dirs: [
        'src/store/*'
      ],
      dts: './auto-imports.d.ts',
      vueTemplate: false,
      resolvers: [
        /* ... */
      ],
      injectAtEnd: true,
    }),
    Components({
      dirs: [
        'src/components/**/*',
        'src/layouts/*',
        'src/views/**/*'
      ]
    })    
  ],
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return {
      ...baseConfig,
    }
  }
  return {
    ...baseConfig
  }
})
