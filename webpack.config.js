const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
   mode: 'production',
   entry: ['./src/index.js', './src/scss/default-theme.scss'],
   output: {
      path: __dirname + '/dist',
      filename: 'js/cookiesInfo.js',
   },
   devServer: {
      contentBase: path.join(__dirname, 'dist'),
   },
   module: {
      rules: [
         {
            test: /\.scss$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: 'css/[name].css',
                  },
               },
               {
                  loader: 'extract-loader',
               },
               {
                  loader: 'css-loader?-url',
               },
               {
                  loader: 'postcss-loader',
               },
               {
                  loader: 'sass-loader',
               },
            ],
         },
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env'],
               },
            },
         },
      ],
   },
   plugins: [
      new CleanWebpackPlugin(),
      new CopyPlugin({
         patterns: [
            {
               from: 'scss/*',
               to: './',
               context: 'src',
            },
            {
               from: 'index.html',
               to: './',
               context: 'public',
            },
         ],
      }),
   ],
}
