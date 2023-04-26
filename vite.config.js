import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: true,
    minify: "esbuild",
    reportCompressedSize: true, // Habilitar informe de tamaño comprimido
    chunkSizeWarningLimit: 100, // Establecer límite de advertencia de tamaño de fragmento en 500 kb
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080,
    hot: true
  }
})