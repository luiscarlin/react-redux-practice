## React Basics

Tutorial found [here](https://www.youtube.com/watch?v=JPT3bFIwJYA)


### Notes

- ReactJs is a JS library/ framework to build UIs
- Splits UIs into reusable components
- V in MVC
- It's modular
- AngularJS v ReactJS
  - ReactJS is used to build UIs. Needs other packages to add features.
  - AngularJS is used to build SPA (UIs, form validation, routing, etc) with all features loaded by default
  - AngularJS controls the complete user experience
  - ReactJS can be used as part of other type of applications (Lavarel, Angular, etc). Angular cannot do that
- You tell React where to render components in your view

### Set Up

- Create your project folder
- Install nodejs
- Install npm
- Initialize your npm project `npm init -y`
- Install production dependencies `npm install --save`
  - react      - access to generic react
  - react-dom  - dom-related rendering
- Install development dependences `npm install --save-dev`
  - webpack              - module bundler (transforming, packagin, etfc)
  - webpack-dev-server   - a dev only server to load webpack bundle (live reloading)
  - babel-core           - transpiler library
  - babel-loader         - transpiler loader
  - babel-preset-es2015  - transpile es6 to es5
  - babel-preset-react   - transpile react to regular js
  - babel-preset-stage-2 - transpiler extra features
- Create ./src/app/ for reactjs app
- Create root file index.html in ./src/
- Create webpack.config.js in ./
- Create ./src/app/index.js with script tag to bring bundle.js file
- Add npm scripts to transpile and run webpack dev server in package.json:
```
  "scripts": {
    // build dev mode and start dev server
    "start": "npm run build",

    // Generate development build. webpack will find automatically webpack.config.js
    // run webpack in development mode (-d)
    // transpile and load everything
    // copy index.html (could be done with webapck too) to DIST_DIR
    // start webpack dev server to serve site in development server
    // tell webpack-dev-server where the did the code come from
    // inline -> show output messages inline
    // hot -> live (hot) reloading
    "build": "webpack -d && cp src/index.html dist/index.html && webpack-dev-server --content-base src/ --inline --hot",

    // Generate production build
    // transpiles code, removes sourcemaps, bundle, and minify
    // still need to copy index.html to DIST_DIR
    "build:prod": "webpack -p && cp src/index.html dist/index.html"
  },
```
- Create your first component
- Add a hook to your component in html with `<div id="app"></div>`
- Done.
