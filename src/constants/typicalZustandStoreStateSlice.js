const typicalZustandStoreStateSlice = (set, get, generateRandomNickname) => ({

    _hasHydrated: false,
    setHasHydrated: (state) => {
        set({
            _hasHydrated: state
        });
    },

    darkMode: null,
    toggleDarkMode: () => set({ darkMode: !get().darkMode }),
    setDarkMode: (newValue) => {
        set((prev) => ({
            darkMode: newValue
        }))
    },

    nickname: generateRandomNickname(),
    setNickname: (newValue) => {
        set((prev) => ({
            nickname: newValue
        }))
    },
    randomNickname: () => {
        const newNickname = generateRandomNickname();
        set((prev) => ({
            nickname: newNickname
        }))
    },

    nicknameKeyboard: false,
    setNicknameKeyboard: (newValue) => {
        set((prev) => ({
            nicknameKeyboard: newValue
        }))
    },

    debug: false,
    setDebug: (newValue) => {
        set((prev) => ({
            debug: newValue
        }))
    },

    sidebar: true,
    toggleSidebar: () => {
        set((prev) => ({
            sidebar: !prev.sidebar
        }))
    },
    setSidebar: (newValue) => {
        set((prev) => ({
            sidebar: newValue
        }))
    },

    showMenu: false,
    setShowMenu: (value) => set({ showMenu: value }),

    showSettingsModal: false,
    setShowSettingsModal: (newValue) => {
        set((prev) => ({
            showSettingsModal: newValue
        }))
    },

    showInfoModal: false,
    setShowInfoModal: (newValue) => {
        set((prev) => ({
            showInfoModal: newValue
        }))
    },

    showCreditsModal: false,
    setShowCreditsModal: (newValue) => {
        set((prev) => ({
            showCreditsModal: newValue
        }))
    },

    showFriendsModal: false,
    setShowFriendsModal: (newValue) => {
        set((prev) => ({
            showFriendsModal: newValue
        }))
    },

    graphicsQuality: "High",
    setGraphicsQuality: (value) => set({ graphicsQuality: value }),

    lobbyDetails: {
        players: [],
        games: [],
    },
    setLobbyDetails: (lobbyDetails) => set({ lobbyDetails }),

    landingAnimation: true,
    setLandingAnimation: (value) => set({ landingAnimation: value }),
    toggleLandingAnimation: () => set({ landingAnimation: !get().landingAnimation }),

    toontownMode: false,
    toggleToontownMode: () => {
        set((prev) => ({
            toontownMode: !prev.toontownMode
        }))
    },
    setToontownMode: (newValue) => {
        set((prev) => ({
            toontownMode: newValue
        }))
    },

    showGameOverModal: false,
    setShowGameOverModal: (newValue) => {
        set((prev) => ({
            showGameOverModal: newValue
        }))
    },

    sceneKey: 0,
    setSceneKey: (newValue) => {
        set((prev) => ({
            sceneKey: newValue
        }))
    },
    reloadScene: () => {
        set((prev) => ({
            sceneKey: prev.sceneKey + 1
        }))
    }

})

export default typicalZustandStoreStateSlice