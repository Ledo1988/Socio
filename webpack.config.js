const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
module.exports = {
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve( __dirname, 'dist' ),
		filename: 'main.js',
		publicPath: '/',
	},
	devServer: {
		historyApiFallback: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|jss)$/,
				use: 'babel-loader',
			},
			{
				test: /(\.css|\.sass|\.scss)$/,
				use: [
					{
						loader: require.resolve('style-loader'),
					},
					{
						loader: require.resolve('css-loader'),
						options: {
							importLoaders: 1,
							modules: {
								localIdentName: "[name]__[local]___[hash:base64:5]",
							},
						}
					},
					{
						loader: require.resolve('sass-loader'),
					},
					{
						loader: 'sass-resources-loader',
						options: {
							resources: ['src/styles/helpers/_variables.scss', 'src/styles/helpers/_mixins.scss']
						},
					},
				],
			},
			{
				test: /\.(png|jp(e*)g|svg)$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 8000, // Convert images < 8kb to base64 strings
						name: 'images/[hash]-[name].[ext]'
					}
				}]
			},

			{
				test: /\.(eot|ttf|woff|woff2|otf)$/,
				use: [{
					loader: 'file-loader',
					options: { name: 'public/fonts/[name].[ext]' },
				}],
			},

			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: path.resolve( __dirname, 'public/index.html' ),
			filename: 'index.html',
			inject: false
		})
	],
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
};