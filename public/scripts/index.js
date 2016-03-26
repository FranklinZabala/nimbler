"use strict";

var host = location.origin.replace(/^http/, "ws");
var ws = new WebSocket(host);

ws.onmessage = function (e) {
    
    ws.send("ping back " + e);
};
