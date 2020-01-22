const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: './src/js/index.js', //CAN HAVE ONE OR MORE;FILE THAT WEBPACK STARTS LOOKING FOR DEPENDENCIES
    //TELLS WEBPACK WHERE TO SAVE
    //IT IS AN OBJECT
    output: {
        path: path.resolve(__dirname, 'dist'), //NEEDS TO BE ABSOLUTE PATH
        //path.resolve(__dirname) == current directory absolute file path..
        //path needs to be required and is given through NODEJS

        filename: 'js/bundle.js'
    },
    //mode: 'development' moved to rum from npm script...check there for notes
    //'devleopment' mode doesnt minify code so its fast as possible
    //'production' does automatic optimizations
    /*"build": "webpack --mode production" used as 'npm run build' it runs 
    this script for webpack in production mode..can be any name cant comment in json oof
    */
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        /*WEBPACK DEV SERVER DOESNT SAVE HARD FILES IT BASICALLY STREAMS 
        DATA TO THE SERVER 
        if you want to save have to use 'dev' or 'build'*/
        new htmlWebpackPlugin({
           fileName: 'index.html', /*this is the filename that is going to go to the 
           production folder ...dist folder */
           template: './src/index.html' /*starting html the one thats in the src folder....
           the one that needs to be updated*/ 
        })
    ], //plugins takes an array of all plugins we are using     
    module: {    /*WEBPACK LOADER SYNTAX 
        loaders let you import and process different fiies
        like convert sass and convert es5 to es6 or vice 
        versa*/
        rules: [   /*rules property is an array of objects that specify 
            the loaders*/
            {
                test: /\.js$/, /*this is the condition that will run the loader
                listed under use in this state this regular expression will check if the files end in '.js'
                test property is needed for loaders and will run the use object when met*/
                
                exclude: /node_modules/, /* this is a regex and will exclude the node-modules folder
                from the test conditions*/
                
                use: {
                   loader: 'babel-loader' 
                }
            }
        ]
    }

}