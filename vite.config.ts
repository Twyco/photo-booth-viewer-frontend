import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

export default defineConfig({
  base: '/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@app': resolve(__dirname, './src/app'),
      '@views': resolve(__dirname, './src/views'),
    }
  },
  root: '.',
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vuetify: ['vuetify'],
        }
      }
    }
  }
});