const child_process = require("child_process");
const tmp = require("tmp");
const path = require("path");
const downloadFile = require("./downloadFile");

module.exports = () => {
  const tmpobj = tmp.dirSync();
  const installScriptPath = path.join(tmpobj.name);
  downloadFile("https://install.tuist.io", installScriptPath);
  child_process.execSync(`chmod +x ${installScriptPath}`);
  child_process.execSync(installScriptPath);
  tmpobj.removeCallback();
};
