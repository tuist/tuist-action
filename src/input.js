const core = require('@actions/core');

exports.command = () => {
    return core.getInput('command', { required: true });
}

exports.arguments = () => {
    return core.getInput('arguments', { required: false });
}