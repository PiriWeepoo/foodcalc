import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { VitePWA } from 'vite-plugin-pwa'

const vitePWA = VitePWA({
  registerType: 'autoUpdate',
  outDir: 'build',
  manifest: {
    name: 'Food calc',
    short_name: 'Food calc',
    description: 'Food calc',
    theme_color: '#4a7766',
    icons: [
      {
        src: 'public/img/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: 'public/img/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vitePWA],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
