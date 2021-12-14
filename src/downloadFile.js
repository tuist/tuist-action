const https = require('https');
const fs = require('fs');

function downloadFileFollowRedirect(url, file, resolve) {
  https.get(url, (response) => {
    if (response.statusCode === 301 || response.statusCode === 302) {
      return downloadFileFollowRedirect(
        response.headers.location,
        file,
        resolve,
      );
    } else {
      response.pipe(file);
      file.on('finish', function () {
        file.close(function () {
          resolve();
        });
      });
    }
  });
}

module.exports = async (url, into) => {
  const file = fs.createWriteStream(into);
  let promise = new Promise((resolve, reject) => {
    downloadFileFollowRedirect(url, file, resolve);
  });
  await promise;
};
