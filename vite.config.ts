import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias : {
      "@components" : path.resolve(__dirname, './src/components'),
      "@pages" : path.resolve(__dirname, './src/pages'),
      "@assets" : path.resolve(__dirname, './src/assets'),
      "@utils" : path.resolve(__dirname, './src/utils'),
      "@hooks" : path.resolve(__dirname,'./src/hooks'),
      "@redux" : path.resolve(__dirname,'./src/redux'),
      "@datas" : path.resolve(__dirname,'./src/datas'),
    }
  }
})
