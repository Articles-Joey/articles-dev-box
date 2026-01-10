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
      entry: {
        index: resolve(__dirname, 'index.js'),
        Ad: resolve(__dirname, 'src/components/Ads/Ad.jsx'),
        ArticlesAd: resolve(__dirname, 'src/components/Ads/ArticlesAd.jsx'),
        GameScoreboard: resolve(__dirname, 'src/components/Games/GameScoreboard.jsx'),
        ReturnToLauncherButton: resolve(__dirname, 'src/components/Games/ReturnToLauncherButton.jsx'),
        GlobalHead: resolve(__dirname, 'src/components/Global/GlobalHead.jsx'),
        GlobalBody: resolve(__dirname, 'src/components/Global/GlobalBody.jsx'),
      },
      formats: ['es', 'cjs'],
      fileName: (format, entryName) => `${entryName}.${format === 'es' ? 'js' : 'cjs'}`,
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
