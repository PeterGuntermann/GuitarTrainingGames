# GuitarTrainingGames

⚠ In Progress ⚠

## Main user story

As a guitarist I want get a mode with a root key by only clicking one button so that I can exercise with it.

## Future features

-   Visualization of the modes
-   Exercise ascending or descending
-   Clickable, customizable fretboard

# Code formatting with Prettier

-   Follow this guide: https://prettier.io/docs/en/webstorm.html#using-prettier-in-webstorm.
-   Don't forget to install Prettier using `npm install --save-dev --save-exact prettier`.
-   In "advanced options", uncheck "Auto-save edited files to trigger the watcher".

Prettier File Watcher:
![Prettier File watcher setting](doc/filewatcher-setting.png)

Prettier settings:
![Prettier Settings](doc/prettier-settings.png)

Save Actions Plugin:
![Save Actions Settings](doc/save-actions-settings.png)

# Deployment

Compare to: https://medium.com/tech-insights/how-to-deploy-angular-apps-to-github-pages-gh-pages-896c4e10f9b4

-   Install "github pages" tool (see package.json): `npm i angular-cli-ghpages — save-dev`
-   Build app: `ng build --prod --base-href "https://GithubUserName.github.io/GuitarTrainingGames/"`
-   Deploy to Github Pages: `npx angular-cli-ghpages — dir=dist/GuitarTrainingGames`
