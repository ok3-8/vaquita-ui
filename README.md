# Vaquita React

## Getting Started

### Install

```bash
npm install vaquita-react --save
```

Before the building, you need a style theme, here we recommend you to pick up `vaquita-theme-default`.


### Usage

We are die hard fans of ECMAScript 6, so we recommend you writing code in modern javascript.

```js
import { Button } from 'vaquita-react';
```

Also we provide an advanced way to [tree shaking](https://blog.engineyard.com/2016/tree-shaking) the code with [Rollup.js](http://rollupjs.org/) and [Webpack 2](https://webpack.github.io/)

```js
import { Button } from 'vaquita-react/next';
```

### Config

With webpack, you need additional loaders to build with `vaquita-react`.

```js
const webpack = require('webpack');

module.exports = {
  entry: {
    src: 'path/to/src'
  },
  output: {
    path: 'path/to/output'
    publicPath: '/public',
    chunkFilename: '[chunkhash:12].js',
    filename: '[chunkhash:12].js'
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: ['path/to/src']
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
        loader: 'file-loader?name=[hash:12].[ext]'
      }
    ]
  }
}
```


## License

MIT
