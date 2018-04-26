/**
 * Webpack configuration base for handling the application's source code
 */
const path = require("path");

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.
  storybookBaseConfig.output = {
    ...storybookBaseConfig.output,
    library: "[name]"
  }

  // Make whatever fine-grained changes you need
  storybookBaseConfig.module.rules.push({
        test: /\.(woff|woff2|eot|ttf)$/,
        use: {
          loader: 'url-loader?limit=1024&name=/fonts/[name].[ext]'
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
         use: [
          {
            loader: 'file-loader',
            options: {
              query: {
                name:'assets/[name].[ext]'
              }
            }
          },
        {
          loader: 'image-webpack-loader',
          options: {
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: true,
              },
              optipng: {
                optimizationLevel: 7,
              }
            }
          }
        }]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      });

  console.log(storybookBaseConfig);
  // Return the altered config
  return storybookBaseConfig;
};