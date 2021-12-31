const core = require('@actions/core');

exports.environment = () => core.getInput('environment', { required: false });

exports.command = () => core.getInput('command', { required: true });

exports.args = () => core.getInput('arguments', { required: false });
