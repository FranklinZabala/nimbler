"use strict";

var jQuery = require("jquery");
var ko = require("knockout");
var host = location.origin.replace(/^http/, "ws");
var ws = new WebSocket(host);

jQuery(document).ready(function () {
    ws.onmessage = function (e) {        
        ws.send("ping back " + e);
    };

    ko.components.register("panel", {
        viewModel: function (params) {
            var self = this;
            self.label = params.label;
        },
        template: "<div class='panel' data-bind='text: label'></div>"
    });
    
    ko.components.register("textbox", {
        viewModel: function (params) {
            var self = this;
            self.text = params.text;
        },
        template: "<div class='textbox'><input type='text' data-bind='textInput: text'></div>"
    });    
    
    ko.applyBindings({
        text: ko.observable("fasdf"),
    });
});