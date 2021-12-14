const core = require('@actions/core');
const input = require('./input');
const execSync = require('./execSync');
const isTuistInstalled = require('./isTuistInstalled');
const installTuist = require('./installTuist');
const { tuistEnvPath } = require('./constants');

module.exports = async () => {
  const command = input.command();
  const args = input.args();

  // Install Tuist if it doesn't exist in the system
  if (!isTuistInstalled()) {
    await installTuist();
  }

  let execCommand = `${tuistEnvPath} ${command}`;
  if (args) {
    execCommand = `${execCommand} ${args}`;
  }

  try {
    execSync(execCommand);
  } catch (error) {
    core.setFailed(error.message);
  }
};
