"use strict";

var http = require("http");
var server;

exports.start = function(){

    server = http.createServer();

    server.on("request", function(req,res){
        console.log("request called");
        res.statusCode = 200;
        res.end("Hello World");
    });
    server.listen(8080);
    console.log("server started");
};

exports.stop = function(callback){
    server.close(callback);
};





