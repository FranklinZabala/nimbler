var ko = require("knockout");

function viewModel(params) {
    var self = this;
    self.label = params.label;
};

module.exports = {
    viewModel: viewModel,
};