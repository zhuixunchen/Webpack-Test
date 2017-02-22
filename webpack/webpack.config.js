var webpack = require('webpack');
//var HtmlWebpackPlugin = require('html-webpack-plugin');    //依据模板生成hmtl5插件

module.exports = {
    devtool: 'eval-source-map',
	entry: __dirname + "/app/main.js",//唯一入口文件
	output: {
		path: __dirname + "/public",//打包后的文件存放的地方
		filename:"bundle.js"//打包后输出文件的文件名
	},
	module:{
		loaders:[
			{test:/\.css$/,loader:'style-loader!css-loader?modules!postcss-loader'},
            {test:/\.json$/,loader:'json-loader'},
            {
                test: /\.js$/,
                exclude:/node_modules/,
                loader:'babel-loader',
                //query: {presets: ['es2015', 'react']}   (已配置在.babelrc中)
            }
		]
	},
    plugins:[
      new webpack.LoaderOptionsPlugin({
          options:{
              postcss:[require('autoprefixer')]
          }
      }),
      new webpack.BannerPlugin('Copyright Flying Unicorns inc'),
      /*new HtmlWebpackPlugin({
          template:__dirname + "/app/index.tmpl.html"
      })*/  //依据模板自动生成最终的html5文件，这个文件自动引入打包后的js文件
    ],
    devServer:{
        contentBase:"./public",//本地服务器所加载的页面所在的目录
        colors:true,//终端中输出结果为彩色
        port:"",//监听端口，默认“8080”
        inline:true,//实时刷新
        historyApiFallback:true//true:所有跳转都指向当前页面
    }
}