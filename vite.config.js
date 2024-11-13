import { defineConfig } from 'vite'
import { resolve } from 'path';
import terser from '@rollup/plugin-terser';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // Remove console logs in production
    terser({
      compress: {
        drop_console: true, // I don't build in local - process.env.NODE_ENV === 'production',
      },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'), // Main entry for popup UI
        content: resolve(__dirname, 'src/content.ts'), // Content script
        background: resolve(__dirname, 'src/background.ts'), // Background script
        popup: resolve(__dirname, 'src/popup.ts') // Popup script
      },
      output: {
        entryFileNames: 'assets/[name].js', // Output folder for JS files
      },
    },
  },
})
