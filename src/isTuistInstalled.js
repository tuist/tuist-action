const child_process = require("child_process");

module.exports = () => {
  try {
    child_process.execSync("which tuist");
    return true;
  } catch {
    return false;
  }
};
