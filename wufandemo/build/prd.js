// 生产环境访问路径 https://igi.cignacmb.com/cmbnt
var path = require('path');
var config = require('./webpack.config');
var webpack = require('webpack');
var publicPathName = require('./config');


config.output.path = path.join(__dirname, '../dist/prd');
config.output.publicPath = '/ftechgencode/gjh/prd';
config.module.loaders[3].loader = "url-loader?limit=8000&name=/img/[hash].[ext]"

config.plugins[0] = new webpack.DefinePlugin({
    'NODE_ENV': '"prd"',
    'ENV_HOST': '"http://igi.cignacmb.com"',
});

module.exports = config;
