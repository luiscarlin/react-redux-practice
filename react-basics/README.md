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

### Setup

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
  - babel-loader         - transpiler core
  - babel-preset-es2015  - transpile es6 to es5
  - babel-preset-react   - transpile react to regular js
  - babel-preset-stage-2 - transpiler extra features
- Create scaffolding
  - ./src/app/
- Create index.html in ./src/
- Create webpack.config.js in ./
