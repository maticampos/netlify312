import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Copiar archivos estáticos
      input: {
        main: './index.html'
      }
    }
  }
})
