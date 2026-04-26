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

- ReturnToLauncherButton
    - For bringing users back to their state in the games showcase/launcher
- SignInButton
    - For bringing users to the accounts service to login at and redirecting back
- SessionButton
    - Button that manages sign in, sign out, and account details.
- GameScoreboard
    - Scoreboard for registered games that links with a user's Articles Media account.
- Ad
    - Articles Ad component that connects with user data.
- GlobalHead
    - Not used at this time, allows for just <head> related tags to be added to site without other logic.
- GlobalBody
    - Easy way to add future logic and components to all projects with ease. For now handling the font awesome script. Also shows connection status to required servers in development. Will ping the main and auth server as they are needed for some dev-box features.
- ViewUserModal
    - View user profile data and recent activity.
- SettingsModal
    - All in one component to handle game settings UI across multiple games.
- CreditsModal
    - All in one component to handle game credits UI across multiple games.
- DarkModeHandler
    - Consumes a Zustand store, detects prefers-color-scheme, sets data-bs-theme on body element.
- ToontownModeHandler
    - Handles setting zustand state from url params if toontownMode is passed.
- SocketServerUrlHandler
    - Handles setting socket server state from url params if socketServerUrl is passed.
- useUserToken
    - Hook for getting the subdomain auth token.
- useUserDetails
    - Hook for getting the details of the current user if a valid user token is found.
- useFullscreen
    - Hook for going fullscreen on the body or provided element

# Roadmap
⏹️ Remove Bootstrap reliance  
⏹️ Figure out why this package does not work outside webpack, on Turbopack for example it fails. Bootstrap SASS related I think.  

# TODO
- Bundle SCSS on a component level instead of a project level.  
- Verify I am exporting components the most efficient way.