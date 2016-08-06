'use strict';

module.exports = {
	context: __dirname + '/app',
	entry: './index.module.js',
	output: {
		path: __dirname + '/app',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
			{ test: /\.html$/, loader: 'raw', exclude: /node_modules/ },
			{ test: /\.scss$/, loader: 'style!css!sass', exclude: /node_modules/ }
		]
	}
}