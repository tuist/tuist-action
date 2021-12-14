const https = require('https');
const fs = require('fs');

function downloadFileFollowRedirect(url, file, resolve, reject) {
  https.get(url, (response) => {
    if (response.statusCode === 301 || response.statusCode === 302) {
      return downloadFileFollowRedirect(
        response.headers.location,
        file,
        resolve,
      );
    }
    if (response.statusCode >= 400) {
      return reject(
        new Error(
          `Getting the file at ${url} failed with HTTP status code ${response.statusCode}`,
        ),
      );
    }

    response.pipe(file);
    return file.on('finish', () => {
      file.close(() => {
        resolve();
      });
    });
  });
}

module.exports = async (url, into) => {
  const file = fs.createWriteStream(into);
  const promise = new Promise((resolve, reject) => {
    downloadFileFollowRedirect(url, file, resolve, reject);
  });
  await promise;
};
