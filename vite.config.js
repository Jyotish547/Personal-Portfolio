// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  root: "src",
  build: {
    outDir: "../public",
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        projects: resolve(__dirname, 'src/projects.html'),
        p1: resolve(__dirname, 'src/nexusPlay.html')
      },
    },
  },
})