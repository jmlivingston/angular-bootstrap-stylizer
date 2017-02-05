# Angular Bootstrap Stylizer

## Stylize your Angular project with Bootsrap SASS like a boss!

## BUILD

- Open the Style Guide to see primary Bootstrap components.
- Pick a theme from the dropdown menu. Bootswatch themes use the SASS files provided by Bootswatch. Many of these are great off the shelf, but they're also great starting points.
- Review all components or click on a specific component to make tweaks specifically to that component.
- Tweak the SASS in core/style directory. Typically you would start with the _variables.scss which are the default Bootstrap variables. For example: try changing the $body-bg variable to something different.
- For more details on Bootstrap's customization options, see: Customization Options. This is not a comprehensive list of all the variables, but should get you started.

## EXPORT

- Copy files from the theme folder you are targeting. For example: core/style/themes/bootstwatch/lumen.
- Copy the _bootstrap.scss from the original folder.
- Install the latest Bootstrap package via npm into your package. Important: Make sure this is the same version as in the _bootstrap.scss.

## OPTIMIZE

- Bootstrap 4 is now minified to 152 KB, but you can further optimize it by commenting out components you don't need in _bootstrap.scss.

## STYLE GUIDE

The markup in the style guide is meant to be used by developers, UX, and clients alike. Developers can focus on ensuring code is modular, avoid code duplication, and use the code snippets to quickly scaffold pages. UX can use the page as an interactive style guide for review with the client.

## THEMING

For theming support, checkout the code in core/style/theme.js, app.js, and core/header/header.js.

## AVAILABLE THEMES

- Original
- Custom - Dark
- Custom - Material
- Bootswatch
  - Cerulean
  - Cosmo
  - Cyborg
  - Darkly
  - Flatly
  - Journal
  - Litera
  - Lumen
  - Lux
  - Materia
  - Minty
  - Pulse
  - Sandstone
  - Simplex
  - Slate
  - Solar
  - Spacelab
  - Superhero
  - United
  - Yeti

## CREDIT

None of this would be possible without these awesome technologies and tools:

- [Angular](https://angular.io)
- [angular-cli](https://github.com/angular/angular-cli)
- [Bootstrap v4.0](https://v4-alpha.getbootstrap.com/)
- [Bootswatch](https://bootswatch.com/4-alpha/)

## angular-cli information below

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.30.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to GitHub Pages

Run `ng github-pages:deploy` to deploy to GitHub Pages.

## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
