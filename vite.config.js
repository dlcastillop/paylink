import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // If you are deploying on GitHub Pages, you need to set the
  // base to the name of your repository except if the repository
  // is named <username>.github.io, in that case, you can leave
  // the line commented or set the base to '/'
  // base: '/paylink/',
  plugins: [react()]
})
