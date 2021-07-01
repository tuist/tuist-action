const core = require("@actions/core");
const input = require("./input");
const execSync = require("./execSync");
const isTuistInstalled = require("./isTuistInstalled");
const installTuist = require("./installTuist");
const { tuistEnvPath } = require("./constants");

module.exports = async () => {
  try {
    const command = input.command();
    const args = input.args();

    // Install Tuist if it doesn't exist in the system
    if (!isTuistInstalled()) {
      await installTuist();
    }

    // Run the command
  //   let execCommand = `${tuistEnvPath} ${command}`;
  //   if (args) {
  //     execCommand = `${execCommand} ${args}`;
  //   }

  //   execSync(execCommand);
  // } catch (error) {
  //   core.setFailed(error.message);
  // }
};
