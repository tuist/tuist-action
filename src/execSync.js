const childProcess = require('child_process');

module.exports = (command) => {
  const options = {};
  if (!process.env.JEST_WORKER_ID) {
    options.stdio = 'inherit';
  }
  childProcess.execSync(command, options);
};
