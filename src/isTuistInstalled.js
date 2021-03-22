const execSync = require("./execSync");

module.exports = () => {
  try {
    execSync("which tuist");
    return true;
  } catch {
    return false;
  }
};
