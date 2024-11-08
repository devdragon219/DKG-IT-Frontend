import {defineConfig, splitVendorChunkPlugin} from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  server: {
    open: true,
    host: "localhost",
    port: 3000,
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('vis3d')) {
            return 'vis3d';
          }
          if (
            id.includes('topojson')
          ) {
            return '@topojson';
          }
          if (
            id.includes('react-icons')
          ) {
            return '@icons';
          }
        },
      },
    },
  },
  define: {
    'process.env': {}
  }
})
