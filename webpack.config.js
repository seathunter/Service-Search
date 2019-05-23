module.exports = {
	entry: `${__dirname}/client/src/index.jsx`,
	module: {
		rules: [
			{
				test: [/\.jsx$/],
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-react', '@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url'
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: 'file-loader'
			}
		]
	},
	output: {
		filename: 'bundle.js',
		path: `${__dirname}/public`
	}
};
