import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      cache: false,
      include: ['src/**/*.vue', 'src/**/*.js', 'src/**/*.jsx', 'src/**/*.cjs', 'src/**/*.mjs']
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    include: [
      'src/styles/main.css'
    ]
  },
  build: {
    lib: {
      entry: 'src/lib/AiHttpHandler.js',
      name: 'AiHttpHandler',
      fileName: 'AiHttpHandler'
    },
    rollupOptions: {
      external: ['vue'],
      input: {
        main: 'src/lib/AiHttpHandler.js'
      },
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://worldtimeapi.org/',
        changeOrigin: true,
        https: true
      }
    }
  }
})
