const core = require('@actions/core');

exports.command = () => core.getInput('command', { required: true });

exports.args = () => core.getInput('arguments', { required: false });
