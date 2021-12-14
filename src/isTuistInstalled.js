const fs = require('fs');
const { tuistEnvPath } = require('./constants');

module.exports = () => {
  try {
    fs.existsSync(tuistEnvPath);
    return true;
  } catch (error) {
    return false;
  }
};
