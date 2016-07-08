var ko = require("knockout");

var ComponentInitializer = function () { };

ComponentInitializer.prototype.initialize = function () {
    ko.components.register("panel", {
        viewModel: require("./panel/panel.js"),
        template: require("fs").readFileSync(__dirname + "/panel/panel.html", "utf8")
    });
    
    ko.components.register("textbox", {
        viewModel: require('./textbox/textbox.js'),
        template: require("fs").readFileSync(__dirname + "/textbox/textbox.html", "utf8")
    });
    
    ko.components.register("composite", {
        viewModel: require('./composite/composite.js'),
        template: require("fs").readFileSync(__dirname + "/composite/composite.html", "utf8")
    });    
    
    ko.applyBindings({
        text: ko.observable("jaksjdfkjadsf"),
    });
};

module.exports = new ComponentInitializer();