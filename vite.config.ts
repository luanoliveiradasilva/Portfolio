import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/luanoliveiradasilva/Portfolio',
  plugins: [react()],
  build: {
    outDir: '/assets/react-app/dist',
    emptyOutDir: true,
  },
})
