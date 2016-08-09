'use strict';

const webpack = require('webpack');

let config = {
	context: __dirname + '/app',
	entry: './index.module.js',
	output: {
		path: __dirname + '/app',
		filename: 'bundle.js'
	},
	plugins: [
		new webpack.DefinePlugin({
			IS_PROD: process.env.NODE_ENV == 'production'
		})
	],
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/ },
			{ test: /\.html$/, loader: 'raw', exclude: /node_modules/ },
			{ test: /\.css$/, loader: 'style!css' },
			{ test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/ },
			{ test: /\.(woff2?|svg)$/, loader: 'url?limit=10000' },
    		{ test: /\.(ttf|eot|png|jpg)$/, loader: 'file' },
		]
	}
}

if (process.env.NODE_ENV == 'production') {
	config.output.path = __dirname + '/dist';
	config.plugins.push(new webpack.optimize.UglifyJsPlugin());
	config.devtool = 'source-map';
}

module.exports = config