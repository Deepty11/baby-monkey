import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/baby-monkey/', // This should match your repository name
  build: {
    outDir: 'dist'
  }
})
