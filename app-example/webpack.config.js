const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
// const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        server: path.resolve(__dirname, 'server.js')
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/[name].js"
    },
    cache: true,
    watchOptions: {
        aggregateTimeout: 200,
        poll: 2000,
        ignored: path.resolve(__dirname, '../node_modules')
    },
    devtool: 'sourcemap',
    target: 'web',
    resolve: {
        modules: [__dirname, 'node_modules'],
        alias: {
            // TODO: add aliases
            // App: path.resolve(__dirname, 'resources/assets/js'),
            // Styles: path.resolve(__dirname, 'resources/assets/sass'),
            // Lang: path.resolve(__dirname, 'resources/lang'),
        },
        extensions: ['.js','.scss', '.json']
    },
    context: process.cwd(),
    node: {__filename: true, __dirname: true, buffer: false, fs: 'empty', net: 'empty'},
    module: {
        rules: [
            // JS
            {
                test: /\.js$/i,
                loader: 'babel-loader',
                exclude: /(node_modules|tests)\/.*/,
                include: [
                    path.resolve(__dirname, 'app'),
                    path.resolve(__dirname, 'config'),
                    path.resolve(__dirname, 'core'),
                    path.resolve(__dirname, 'routes'),
                    path.resolve(__dirname, 'resources/assets/js'),
                    path.resolve(__dirname, 'resources/lang'),
                ],
                query: {
                    presets: ["es2015", "stage-1", "stage-0"],
                    plugins: [
                        "transform-decorators-legacy",
                        "transform-class-properties",
                        "transform-object-rest-spread"
                    ],
                }
            }
        ]
    },

    plugins: [
        new CleanPlugin([
            path.resolve(__dirname, 'public/js/**/*.*'),
            path.resolve(__dirname, 'public/css/**/*.*'),
            path.resolve(__dirname, 'public/images/**/*.jpg')
        ]),
        new ExtractTextPlugin({ filename: 'css/[chunkhash].css', allChunks: false }),
        // new ManifestPlugin(),
        // new webpack.DefinePlugin({
        //     'process.env': {
        //         'NODE_ENV': JSON.stringify('production'),
        //     }
        // }),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: true,
        //     minimize: true
        // }),
    ]
};
