import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Relative asset paths make this work on GitHub Pages project URLs.
  base: './',
  plugins: [react()],
})
