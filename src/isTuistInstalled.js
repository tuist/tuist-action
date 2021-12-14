const { tuistEnvPath } = require('./constants');
const fs = require('fs');

module.exports = () => {
  try {
    fs.existsSync(tuistEnvPath);
    return true;
  } catch {
    return false;
  }
};
