import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/LeoninCS.github.io/',  // 仓库名要与 GitHub 仓库保持一致
})
