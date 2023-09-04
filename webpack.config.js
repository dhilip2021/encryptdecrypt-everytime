const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const libraryName = require('./package.json').name

module.exports = (env) => {
    console.log('Environment: ', env.environment);
    return{
        entry : path.resolve(__dirname,'src/index.js'),
        output : {
            filename : 'index.js',
            path : path.resolve(__dirname,'dist'),
            library : libraryName,
            libraryTarget : 'umd',
        },
        optimization: {
            minimizer: [
              new UglifyJsPlugin({
                sourceMap: true
              })
            ]
          },
        module : {
            rules : [{
                test : /\.(js)$/,
                use : 'babel-loader',
                exclude : /node_modules/
            }]
        },
        mode : env.environment
    }
}
