var ko = require("knockout");

function viewModel(params) {
    var self = this;
    self.text = params.text;
};

module.exports = {
    viewModel: viewModel,
};
