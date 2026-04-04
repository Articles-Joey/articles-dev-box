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
        ViewUserModal: resolve(__dirname, 'src/components/UI/ViewUserModal/ViewUserModal.jsx'),
        SettingsModal: resolve(__dirname, 'src/components/Games/Settings/SettingsModal.jsx'),
        CreditsModal: resolve(__dirname, 'src/components/Games/Credits/CreditsModal.jsx'),
        DarkModeHandler: resolve(__dirname, 'src/components/UI/DarkModeHandler.jsx'),

        FriendsList: resolve(__dirname, 'src/components/Friends/FriendsList.jsx'),

        useUserDetails: resolve(__dirname, 'src/hooks/User/useUserDetails.js'),
        useUserToken: resolve(__dirname, 'src/hooks/User/useUserToken.js'),
        useUserFriends: resolve(__dirname, 'src/hooks/User/useUserFriends.js'),
        useFullscreen: resolve(__dirname, 'src/hooks/useFullscreen.js'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: (id) => /^(react|react-dom|react-bootstrap|swr)(\/|$)/.test(id),
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
