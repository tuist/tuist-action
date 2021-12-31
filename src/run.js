const core = require('@actions/core');
const input = require('./input');
const execSync = require('./execSync');
const isTuistInstalled = require('./isTuistInstalled');
const installTuist = require('./installTuist');
const { tuistEnvPath } = require('./constants');
const ensureDarwin = require('./ensureDarwin');

module.exports = async () => {
  try {
    const environment = input.environment();
    const command = input.command();
    const args = input.args();

    ensureDarwin();
    await installTuist();

    let execCommand = `${tuistEnvPath} ${command}`;
    if (environment) {
      execCommand = `${environment} ${execCommand}`;
    }
    if (args) {
      execCommand = `${execCommand} ${args}`;
    }

    execSync(execCommand);
  } catch (error) {
    core.setFailed(error.message);
  }
};
