import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, 'src/components'),
      'helpers': path.resolve(__dirname, 'src/helpers'),
      'queries': path.resolve(__dirname, 'src/queries'),
      'translations': path.resolve(__dirname, 'src/translations'),
      'routes': path.resolve(__dirname, 'src/routes'),
    },
  },
})