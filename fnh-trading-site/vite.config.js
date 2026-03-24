import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Ensure the build output matches what Vercel expects
  build: {
    outDir: 'dist',
  }
})