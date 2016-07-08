"use strict";

var ko = require("knockout");
var jQuery = require("jquery");
var bootstrapper = require("./bootstrapper.js");

jQuery(document).ready(function () {
    bootstrapper.initialize();
});
