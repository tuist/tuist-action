const tmp = require('tmp');
const path = require('path');
const execSync = require('./execSync');
const downloadFile = require('./downloadFile');
const { tuistEnvPath } = require('./constants');
const latestReleaseTuistEnvDownloadURL = require('./latestReleaseTuistEnvDownloadURL');

module.exports = async () => {
  // https://api.github.com/repos/tuist/tuist/releases/latest
  const tmpobj = tmp.dirSync();
  const tuistEnvTmpZipPath = path.join(tmpobj.name, 'tuistenv.zip');
  const tuistEnvUnzippedPath = path.join(tmpobj.name, 'tuistenv');
  const tuistExecEnvUnzippedPath = path.join(
    tuistEnvUnzippedPath,
    'tuistenv',
  );
  const tuistEnvURL = await latestReleaseTuistEnvDownloadURL();
  console.log('Downloading Tuist...');
  await downloadFile(tuistEnvURL, tuistEnvTmpZipPath);
  execSync(
    `unzip -o ${tuistEnvTmpZipPath} -d ${tuistEnvUnzippedPath}`,
  );
  execSync(`cp ${tuistExecEnvUnzippedPath} ${tuistEnvPath}`);
  execSync(`chmod +x ${tuistEnvPath}`);
  console.log(`Tuist has been installed at ${tuistEnvPath}`);
};
