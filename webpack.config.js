const webpack = require('webpack');
const path = require('path');
const NpmInstallPlugin = require('npm-install-webpack-plugin');

const PATHS = {
    react: path.join(__dirname, 'node_modules/react/dist/react.min.js'),
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, './dist')
};

module.exports = {
    entry: {
        jsx: './app/index.jsx',
    },
    output: {
        path: PATHS.build,
        filename: 'app.bundle.js',
    },
    watch: true,
    devtool: 'eval-source-map',
    relativeUrls: true,
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.less'],
        modulesDirectories: ['node_modules'],
        alias: {
            normalize_css: __dirname + '/node_modules/normalize.css/normalize.css',
        }
    },
    module: {
        preLoaders: [

            {
                test: /\.js$/,
                loader: "source-map-loader"
            },
        ],
        loaders: [

            {
                test: /\.html$/,
                loader: 'file?name=[name].[ext]',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets=es2015',
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(jpe?g|png|gif|svg)$/i, loader: "file-loader?name=/public/icons/[name].[ext]" },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['babel-loader?presets=es2015']
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
        new NpmInstallPlugin({
            save: true // --save
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        }),
    ],
    devServer: {
        colors: true,
        contentBase: __dirname,
        historyApiFallback: true,
        hot: true,
        inline: true,
        port: 9091,
        progress: true,
        stats: {
            cached: false
        }
    }
}