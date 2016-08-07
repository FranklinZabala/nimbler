var ko = require("knockout");

function viewModel(params) {
    var self = this;
    self.points = params.points;
    self.title = params.title;
    self.description = params.description;
};

module.exports = {
    viewModel: viewModel,
};