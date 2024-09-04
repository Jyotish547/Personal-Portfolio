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
        p1: resolve(__dirname, 'src/nexusPlay.html'),
        p2: resolve(__dirname, 'src/clarity.html'),
        p3: resolve(__dirname, 'src/alethia.html'),
        p4: resolve(__dirname, 'src/uiDesigns.html'),
        p5: resolve(__dirname, 'src/levelUp.html'),
        p6: resolve(__dirname, 'src/graphicDesigns.html')
        // Add more html pages here that you create in src
      },
    },
  },
})