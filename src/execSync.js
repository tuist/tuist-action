const child_process = require("child_process");

module.exports = (command) => {
  const options = {};
  if (!process.env.JEST_WORKER_ID) {
    options.stdio = "inherit";
  }
  child_process.execSync(command, options);
};
