import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import vue from '@vitejs/plugin-vue'

// .vue文件中不需要手动引入vue api及vue route相关api，如果需要配置可以在下面添加
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
      ],
      defaultExportByFilename: false,
      dirs: [
        'src/store/*',
        'src/composables/*'
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
        'src/components/Button/*',
        'src/components/Notification/*',
        'src/layouts/*',
        'src/views/**/*'
      ],
      // 自定义组件重新命名后要排除，或者得写resolver
      exclude: [
        'src/components/Upload/**/*'
      ]
    })
  ],
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'development') {
    return {
      ...baseConfig,
      server: {
        proxy: {
          '/dev': {
            target: 'http://localhost:3000',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/dev/, ''),
          }
        }
      }
    }
  }
  return {
    ...baseConfig
  }
})
