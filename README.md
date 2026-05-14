# Articles Dev Box

![Preview](/src/img/articles-dev-box.webp)

Shared code, functions, and components that are commonly used across Articles Media projects. 

# Warning
None of this is meant to work outside the Articles Media frontend React ecosystem. Breaking changes are being made in between patch releases until 1.1.0, when we switch to major release for breaking.

## Getting Started

For production use add the organization scooped package to your package.json.

```bash
npm i @articles-media/articles-dev-box
```

For local development, navigate to this project and run this command.

```bash
npm link
```

Then go to the consuming project directory and run this command.

```bash
npm link @articles-media/articles-dev-box
```

You will need to have a dev script running to watch for changes and build the dist to see local changes

```bash
npm run dev
```

## Package Exports

| Name | Description | Usage Example |
| :--- | :--- | :--- |
| ReturnToLauncherButton | For bringing users back to their state in the games showcase/launcher | |
| SignInButton | For bringing users to the accounts service to login at and redirecting back | |
| SessionButton | Button that manages sign in, sign out, and account details. | Catching Game and School Run |
| GameScoreboard | Scoreboard for registered games that links with a user's Articles Media account. | |
| Ad | Articles Ad component that connects with user data. | |
| GameMenu | All in one component that handles the sidebar and menu-bar inside a game page. | Catching Game and School Run use Static Panel for sidebarStyle and Corner Button for menuBarStyle. Ice Slide uses Floating Panel for sidebarStyle and Bar for menuBarStyle. |
| GameMenuPrimaryButtonGroup | The common button groups for landing page and menu content across our games | Catching Game and Move Match |
| NicknameInput | Handles nickname UI on landing page | Catching Game |
| GlobalHead | Not used at this time, allows for head element related tags to be added to site without other logic. | |
| GlobalBody | Easy way to add future logic and components to all projects with ease. For now handling the font awesome script. Also shows connection status to required servers in development. Will ping the main and auth server as they are needed for some dev-box features. | |
| ViewUserModal | View user profile data and recent activity. | |
| SettingsModal | All in one component to handle game settings UI across multiple games. | |
| CreditsModal | All in one component to handle game credits UI across multiple games. | |
| InfoModal | All in one component to handle game info modal across multiple games. | USA Tycoon |
| FriendsList | List and Modal for showing friends. | Auto imported via GlobalClientModals |
| InviteModal | Modal for showing FriendsList with allowInvite | Normally used via GlobalClientModals |
| ReusedSocketLogicHandler | Sets up a lot of common websocket logic | Catching Game, Ocean Rings |
| DarkModeHandler | Consumes a Zustand store, detects prefers-color-scheme, sets data-bs-theme on body element. | |
| ToontownModeHandler | Handles setting zustand state from url params if toontownMode is passed. | |
| SocketServerUrlHandler | Handles setting socket server state from url params if socketServerUrl is passed. | |
| HasNoMouseHandler | Sets hasNoMouse and isTouchCapable on first load | |
| useUserToken | Hook for getting the subdomain auth token. | |
| useUserDetails | Hook for getting the details of the current user if a valid user token is found. | |
| useFullscreen | Hook for going fullscreen on the body or provided element | |
| typicalZustandStoreExcludes | Array of strings that every game published by Articles Media would want to normally exclude from persisting in base game store. | Catching Game and School Run |
| typicalZustandStoreStateSlice | Slice of zustand states that every game normally uses | Catching Game and School Run |
| getSignOutRedirectUrl | Handles signout redirect api logic | Catching Game |
| GlobalClientModals | Imports all global client modals like FriendsList, CreditsModal, SettingsModal, InfoModal, and so on | USA Tycoon |
| generateRandomNickname | Reusable way of doing random nicknames from package | USA Tycoon |
| defaultGameNextConfig | Not usable, for reference | None |
| defaultGameThemeConfig | Not usable, for reference | None |
| useModalNavigation | Handles navigating a modal with controller | None |
| gameLandingPageTemplate | All in one component that sets up the default landing page as much as possible | USA Tycoon |
| gamePageTemplate | All in one component that sets up the default game page as much as possible | USA Tycoon |

# Usage Examples
For newly developed components I sometimes find myself trying to remember what repos used it. Here is a short list of recent components developed and what project is using it. Doing this until AMPM can search by imports or enough projects adopted the component.

# Roadmap
⏹️ Remove Bootstrap reliance?  
⏹️ Figure out why this package does not work outside webpack, on Turbopack for example it fails. Bootstrap SASS related I think.  

# TODO
- Nothing major right now, search "TODO" in repo for minor stuff.