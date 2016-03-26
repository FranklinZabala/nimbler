"use strict";

var forky = require("forky");
var path = require("path");

forky({
    workers: 1,
    path: path.join(__dirname, "server"),
    enable_logging: true
});
