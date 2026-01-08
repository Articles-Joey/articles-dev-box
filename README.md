# Articles Dev Box

Shared code, functions, and components that are commonly used across Articles Media projects. None of this is meant to work outside the Articles Media frontend React ecosystem.

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

## Package Exports

- ReturnToLauncherButton
    - For bringing users back to their state in the games showcase/launcher
- GameScoreboard
    - Scoreboard for registered games that links with a user's Articles Media account.
- Ad
    - Articles Ad component that connects with user data.

# Roadmap
⏹️ Remove Bootstrap reliance  
⏹️ Look into npm package yalc  
⏹️ Automatic GitHub Action for NPM


# TODO
- Bundle SCSS on a component level instead of a project level.
- Verify I am exporting components the most efficient way.