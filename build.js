var webpack = require("webpack");
var config = require('./webpack.config.js');

webpack(config, function(err, stats) {
    console.log(err);
    console.log(stats.toString())
});
