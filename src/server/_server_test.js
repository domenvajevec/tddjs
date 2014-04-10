"use strict";
var server = require('./server.js');
var http = require('http');


exports.tearDown = function(done){
    server.stop(function(){
//        console.log("teardown");
        done();
    });

};


exports.testHelloWorld = function(test){
    server.start(8080);
    var request = http.get("http://localhost:8080", function(response){
        var receivedData = false;
        response.setEncoding('utf-8');

        test.equals(200, response.statusCode, "status code");
        response.on("data", function(chunk) {
            receivedData = true;
            test.equals("Hello World", chunk, "response text");
        });
        response.on("end", function() {
            test.ok(receivedData, "should have received response data");
            test.done();
        });
//        response.on("data", function(){
//            test.done();
//        });
    });
};