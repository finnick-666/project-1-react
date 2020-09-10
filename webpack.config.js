const path = require('path');

module.exports = {
    entry: './src/main.js',
    output: {
        filename:'main.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
        rules: [{
            test:/\.js$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets:['@babel/preset-react'],
                }
            },
        }]
    }
};