import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, './src'),
  //   },
  // },
  build: {
    lib: {
      entry: resolve(__dirname, 'index.js'),
      name: 'ArticlesDevBox',
      fileName: 'articles-dev-box',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
