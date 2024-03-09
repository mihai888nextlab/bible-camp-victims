import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server : {
    proxy: {
      "/bibleCamp": {
        target: "http://localhost:80",
        changeOrigin: true,
        secure: false
      }
    }
  },
  plugins: [react()],
})
