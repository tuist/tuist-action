const core = require("@actions/core");
const input = require("./input");
const child_process = require("child_process");
const isTuistInstalled = require("./isTuistInstalled");

module.exports = () => {
  try {
    const command = input.command();
    const args = input.args();

    // Install Tuist if it doesn't exist in the system
    if (!isTuistInstalled()) {
      child_process.execSync(`bash <(curl -Ls https://install.tuist.io)`);
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
