const execSync = require("./execSync");
const tmp = require("tmp");
const path = require("path");
const downloadFile = require("./downloadFile");
const { tuistEnvPath } = require("./tuistEnvPath");
const latestReleaseTuistEnvDownloadURL = require("./latestReleaseTuistEnvDownloadURL");

module.exports = async () => {
  // https://api.github.com/repos/tuist/tuist/releases/latest
  const tmpobj = tmp.dirSync();
  const tuistEnvTmpZipPath = path.join(tmpobj.name, "tuistenv.zip");
  const tuistEnvUnzippedPath = path.join(tmpobj.name, "tuistenv");
  const tuistEnvURL = await latestReleaseTuistEnvDownloadURL();
  console.log("Downloading tuistenv...");
  downloadFile(tuistEnvURL, tuistEnvTmpZipPath);
  execSync(`unzip -o ${tuistEnvTmpZipPath} -d ${tuistEnvUnzippedPath}`);
  execSync(`cp ${tuistEnvUnzippedPath} ${tuistEnvPath}`);
  execSync(`chmod +x ${tuistEnvPath}`);
  console.log("Tuist has been installed.");
};
