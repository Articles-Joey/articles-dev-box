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

        SignInButton: resolve(__dirname, 'src/components/User/SignInButton.jsx'),
        SessionButton: resolve(__dirname, 'src/components/User/SessionButton.jsx'),

        GlobalHead: resolve(__dirname, 'src/components/Global/GlobalHead.jsx'),
        GlobalBody: resolve(__dirname, 'src/components/Global/GlobalBody.jsx'),
        GlobalClientModals: resolve(__dirname, 'src/components/Global/GlobalClientModals.jsx'),

        ViewUserModal: resolve(__dirname, 'src/components/UI/ViewUserModal/ViewUserModal.jsx'),
        DarkModeHandler: resolve(__dirname, 'src/components/UI/DarkModeHandler.jsx'),

        GameMenu: resolve(__dirname, 'src/components/Games/GameMenu/GameMenu.jsx'),
        GameMenuPrimaryButtonGroup: resolve(__dirname, 'src/components/Games/GameMenuPrimaryButtonGroup.jsx'),
        NicknameInput: resolve(__dirname, 'src/components/Games/NicknameInput.jsx'),
        GameScoreboard: resolve(__dirname, 'src/components/Games/GameScoreboard.jsx'),
        PageTemplateLandingPage : resolve(__dirname, 'src/components/Games/PageTemplates/PageTemplateLandingPage.jsx'),
        ReturnToLauncherButton: resolve(__dirname, 'src/components/Games/ReturnToLauncherButton.jsx'),
        SettingsModal: resolve(__dirname, 'src/components/Games/Settings/SettingsModal.jsx'),
        CreditsModal: resolve(__dirname, 'src/components/Games/Credits/CreditsModal.jsx'),
        InfoModal: resolve(__dirname, 'src/components/Games/InfoModal.jsx'),
        ToontownModeHandler: resolve(__dirname, 'src/components/Games/ToontownModeHandler.jsx'),
        SocketServerUrlHandler: resolve(__dirname, 'src/components/Games/SocketServerUrlHandler.jsx'),

        HasNoMouseHandler: resolve(__dirname, 'src/components/Handlers/HasNoMouseHandler.jsx'),

        FriendsList: resolve(__dirname, 'src/components/Friends/FriendsList.jsx'),
        InviteModal: resolve(__dirname, 'src/components/Games/InviteModal.jsx'),

        ReusedSocketLogicHandler: resolve(__dirname, 'src/components/Games/Socket/ReusedSocketLogicHandler.jsx'),

        useUserDetails: resolve(__dirname, 'src/hooks/User/useUserDetails.js'),
        useUserToken: resolve(__dirname, 'src/hooks/User/useUserToken.js'),
        useUserFriends: resolve(__dirname, 'src/hooks/User/useUserFriends.js'),
        useFullscreen: resolve(__dirname, 'src/hooks/useFullscreen.js'),

        typicalZustandStoreExcludes: resolve(__dirname, 'src/constants/typicalZustandStoreExcludes.js'),
        typicalZustandStoreStateSlice: resolve(__dirname, 'src/constants/typicalZustandStoreStateSlice.js'),
        zustandSocketStoreSlice: resolve(__dirname, 'src/constants/zustandSocketStoreSlice.js'),
        defaultGameNextConfig: resolve(__dirname, 'src/constants/defaultGameNextConfig.js'),
        defaultGameThemeConfig: resolve(__dirname, 'src/constants/defaultGameThemeConfig.js'),

        getSignOutRedirectUrl: resolve(__dirname, 'src/util/getSignOutRedirectUrl.js'),
        generateRandomNickname: resolve(__dirname, 'src/util/generateRandomNickname.js'),
      },
      formats: ['es'],
      fileName: (format, entryName) => `${entryName}.js`,
    },
    minify: false,
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
