# Create React App


```mkdir my-app```

```cd my-app```

```npm init -y```

```npm i react react-dom```

```npm i -D typescript @types/react @types/react-dom```

```npx tsc --init```

**tsconfig.json**
```
{
    "compilerOptions": {
      "target": "ES2017", 
      "lib": [
        "DOM",
        "ESNext"
      ], 
      "jsx": "react-jsx", 
      "module": "commonjs", 
      "moduleResolution": "node", 
      "resolveJsonModule": true, 
      "noEmit": true, 
      "isolatedModules": true, 
      "esModuleInterop": true, 
      "forceConsistentCasingInFileNames": true, 
      "strict": true, 
      "skipLibCheck": true 
    },
    "include": [
      "src/**/*"
    ],
    "exclude": [
      "node_modules"
    ]
}
```

```mkdir src public```
```touch ./src/index.ts ./src/App.tsx ./public/index.html```


**index.ts**
```
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <div>Hello World </div>
);
```

**index.html**
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
</body>
</html>
```


```npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript```

```touch .babelrc```

**.babelrc**

```
{
  "presets": [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      {
        "runtime": "automatic"
      }
    ],
    "@babel/preset-typescript"
  ]
}
```

```npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin babel-loader```

```mkdir webpack```

```touch ./webpack/webpack.common.js```

**webpack.common.js**

```
const path = require('path');
const HtmlWebpackPlguin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '..', './src/index.tsx'),
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, '..', './build'),
        filename: '[name].js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlguin({
            template: path.resolve(__dirname, '..', './public/index.html')
        })
    ]
}
```

**package.json**

```"start": "webpack serve --config webpack/webpack.common.js --open"```


```npm i -D css-loader style-loader sass sass-loader```

**webpack.common.js**

```
{
    test: /\.(css|scss|sass)$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
}
```

```touch ./src/config.d.ts```

```
declare module '*.png' {
    const src: string;
    export default src;
}
```

**webpack.common.js**

```
{
    test: /\.(?:png|jpeg|jpg|gif|ico)$/,
    type: 'asset/resource'
},
{
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
```

```touch ./webpack/webpack.config.js ./webpack/webpack.dev.js ./webpack/webpack.prod.js ./webpack/webpack.qa.js```

**webpack.dev.js**

```
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: {
        hot: true,
        open: true,
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Development'),
        }),
    ],
}
```

**webpack.prod.js**

```
const webpack = require('webpack')


module.exports = {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('Production'),
        }),
    ],
}
```

**webpack.config.js**
```
const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.js')

module.exports = (envVars) => {
    const { env } = envVars
    const envConfig = require(`./webpack.${env}.js`)
    const config = merge(commonConfig, envConfig)
    return config
}
```

**package.json**

```
    "start": "webpack serve --config webpack/webpack.config.js --env env=dev",
    "build": "webpack --config webpack/webpack.config.js --env env=prod",
```

```npx serve```


```npm i -D @pmmmwh/react-refresh-webpack-plugin```




