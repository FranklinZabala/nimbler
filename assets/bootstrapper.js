"use strict";

var host = location.origin.replace(/^http/, "ws");
var ws = new WebSocket(host);
var componentInitializer = require('./components/component-initializer.js');

var Bootstrapper = function () { };

Bootstrapper.prototype.initialize = function () {
    componentInitializer.initialize();    

    ws.onmessage = function (e) {
        ws.send("ping back " + e);
    };
};

module.exports = new Bootstrapper();