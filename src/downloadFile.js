const Downloader = require('nodejs-file-downloader');
const path = require('path');

module.exports = async (url, into) => {
  const downloader = new Downloader({
    url,
    directory: path.dirname(into),
    fileName: path.basename(into),
  });
  await downloader.download();
};
