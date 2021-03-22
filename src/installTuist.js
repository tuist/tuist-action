const execSync = require("./execSync");
const tmp = require("tmp");
const path = require("path");
const downloadFile = require("./downloadFile");

module.exports = () => {
  const tmpobj = tmp.dirSync();
  const installScriptPath = path.join(tmpobj.name, "install.sh");
  console.log("Downloading Tuist installer...");
  downloadFile("https://install.tuist.io", installScriptPath);
  execSync(`chmod +x ${installScriptPath}`);
  console.log("Installing Tuist...");
  execSync(installScriptPath);
  console.log("Tuist has been installed.");
};
