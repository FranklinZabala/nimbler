"use strict";

var _ = require("underscore");
var path = require("path");

// express
var express = require("express");
var http = require("http");
var app = express();
var server = http.createServer(app);
var port = Number(process.env.PORT || 1742);

app.use(express.static(path.join(__dirname, "./public")));
server.listen(port);
console.log("server port: %s", port)


// websocket
var WebSocketServer = require("ws").Server;
var webSocketServer = new WebSocketServer({ server: server });
var clients = [];
var clientSockets = [];

webSocketServer.on("connection", function (ws) {
    var id = ws.upgradeReq.connection.remoteAddress;
    
    console.log("Client " + id + " connected");
    
    ws.send("greetings");

    ws.on("message", function (message) {
        console.log(message);
    });
});


// process error handler
process.on("uncaughtException", function (err) {
    console.error(err);
    
    require("forky").disconnect();
});
