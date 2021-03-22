const core = require("@actions/core");
const input = require("./input");
const child_process = require("child_process");
const isTuistInstalled = require("./isTuistInstalled");
const installTuist = require("./installTuist");

module.exports = () => {
  try {
    const command = input.command();
    const args = input.args();

    // Install Tuist if it doesn't exist in the system
    if (!isTuistInstalled()) {
      installTuist();
    }

    // Run the command
    let execCommand = `tuist ${command}`;
    if (args) {
      execCommand = `${execCommand} ${args}`;
    }

    child_process.execSync(execCommand);
  } catch (error) {
    core.setFailed(error.message);
  }
};
