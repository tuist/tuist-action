const https = require("https");
const fs = require("fs");

module.exports = (url, into) => {
  const file = fs.createWriteStream(into);
  https.get(url, (response) => {
    response.pipe(file);
  });
};
