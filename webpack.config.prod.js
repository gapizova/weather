const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './prod'),
    filename: '[name].[hash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'), // шаблон
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /(\.css)$/,
        use: [
          'styles-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                  'postcss-preset-env',
                  'at-rule-packer',
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },

      {
        test: /\.svg$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name]-[hash][ext]',
        },
      },
    ],
  },
};
