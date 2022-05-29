const path = require('path');
const fe = require('fs-extra');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

class CopyFilesIntoBackend{
    apply(compile){
        compile.hooks.done.tap('Copy files', function(){
            const resources = path.resolve(__dirname, '..', 'backend/src/main/resources');
            const frontEnd = path.resolve(resources, 'static/front-end');
            const template = path.resolve(resources, 'templates/home');
            const dist = path.resolve(__dirname, 'dist');

            fe.copyFileSync(path.join(dist, 'index.html'), path.join(template, 'index.html'));
            fe.removeSync(frontEnd);
            fe.mkdirSync(frontEnd);
            fe.readdirSync(dist).map(file => {
                if(file.endsWith(".js") || file.endsWith(".css")){
                    fe.copySync(path.join(dist, file), path.join(frontEnd, file));
                }
            });

        });
    }
}

const currentTask = process.env.npm_lifecycle_event;

const ruleCss = {
    test: /\.css$/i,
    use: [
        'css-loader',
        'postcss-loader'
    ],
};

const config = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env', ['@babel/preset-react', {
                                "runtime": "automatic"
                            }]]
                        }
                    },
                    {
                        loader: 'astroturf/loader'
                    },
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ['file-loader'],
            },
            ruleCss
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin()
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
        open: true,
        historyApiFallback: true
    },
}

if(currentTask === 'start'){
    config.plugins.push(new HtmlWebpackPlugin({
        title: 'Music',
        template: './src/index.html'
    }));
}

if (currentTask === 'build') {
    config.mode = "production";
    ruleCss.use.unshift(MiniCssExtractPlugin.loader);
    config.plugins.push(new HtmlWebpackPlugin({
        title: 'Music',
        template: './src/build_index.html',
        inject: false
    }));
    config.plugins.unshift(new MiniCssExtractPlugin({
        filename: 'main.[chunkhash].css'
    }));
    config.plugins.push(new CopyFilesIntoBackend());
    config.optimization = {
        minimizer: [new CssMinimizerWebpackPlugin()],
        splitChunks: {
            chunks: 'all'
        }
    }

    delete config.devServer;
}

module.exports = config;