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
    
    ko.components.register("input-panel", {
        viewModel: require('./input-panel/input-panel.js'),
        template: require("fs").readFileSync(__dirname + "/input-panel/input-panel.html", "utf8")
    });
    
    ko.components.register("story", {
        viewModel: require('./story/story.js'),
        template: require("fs").readFileSync(__dirname + "/story/story.html", "utf8")
    });
    
    ko.applyBindings({
        stories : [
            { points: 8, title: "some title", description: "The quick brown fox jumps over the lazy dog near the bank of the river. The quick brown fox jumps over the lazy dog near the bank of the river." },            
            { points: 8, title: "some title", description: "some description" }
        ]
    });
};

module.exports = new ComponentInitializer();