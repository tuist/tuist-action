const core = require("@actions/core");

exports.command = () => {
  return core.getInput("command", { required: true });
};

exports.args = () => {
  return core.getInput("arguments", { required: false });
};
