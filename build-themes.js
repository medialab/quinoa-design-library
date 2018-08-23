const fs = require('fs-extra');
const sass = require('node-sass');
const webpack = require('webpack');

const THEMES_PATH = __dirname + '/src/themes';
const DIST_PATH = __dirname + '/themes';
const WEBPACK_CONFIG_PATH = __dirname + '/webpack.config.js';
const webpackConfig = require(WEBPACK_CONFIG_PATH)

console.log('prepping and building all the theme-related things ...');
fs.ensureDir(DIST_PATH)
  .then(() => fs.readdir(THEMES_PATH))
  .then(items => {
    const folders = items.filter(item => fs.statSync(THEMES_PATH + '/' + item).isDirectory());
    return folders.reduce((curr, themeName) => {
      console.log('building code for theme %s', themeName);
      const folderPath = THEMES_PATH + '/' + themeName;
      const themeDist = DIST_PATH + '/' + themeName;
      const scssPath = folderPath + '/' + 'bulma.theme.scss';
      const iconsPath = folderPath + '/' + 'icons';
      const fontsPath = folderPath + '/' + 'fonts';
      const cssPath = themeDist + '/' + 'style.css';
      const iconsDistPath = themeDist + '/' + 'icons';
      const fontsDistPath = themeDist + '/' + 'fonts';
      return curr
        .then(() => fs.ensureDir(themeDist))
        .then(() => fs.exists(scssPath))
        .then(() => fs.exists(iconsPath))
        .then(() => fs.exists(fontsPath))
        .then(() => fs.exists(WEBPACK_CONFIG_PATH))
        .then(() => {
          return new Promise((resolve, reject) => {
            console.log('converting scss to css for theme %s', themeName);
            sass.render({
              file: scssPath,
            }, function(err, result) { 
              if (err) {
                reject(err)
              } else {
                return fs.writeFile(cssPath, result.css, 'utf8')
                  .then(resolve)
                  .catch(reject)
              }
            });
          })
        })
        .then(() => {
          return new Promise((resolve, reject) => {
            console.log('packaging assets for theme %s', themeName);
            const config = Object.assign(webpackConfig, {
                output: {
                  filename: 'index.js',
                  path: iconsDistPath
                },
                entry: iconsPath
            });
            webpack(config, err => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            });
          });
        })
        .then(() => {
          return fs.copy(fontsPath, fontsDistPath);
        })
        .then(() => {
          return new Promise(resolve => {
            console.log('all the prepping and building was successful for theme %s', themeName);
            return resolve();
          })
        })
        .then(() => Promise.resolve())
    }, Promise.resolve())
  })
  .catch(error => {
    console.log('an error occured');
    console.log(error);
  })
  .then(() => {
    console.log('all themes built successfully !');
  })