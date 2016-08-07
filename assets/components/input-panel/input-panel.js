var ko = require("knockout");

function viewModel(params) {
    var self = this;
    self.value = params.value;
};

module.exports = {
    viewModel: viewModel,
};