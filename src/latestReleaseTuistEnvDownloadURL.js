const axios = require('axios');
const process = require('process');

module.exports = async function () {
  const url =
    'https://api.github.com/repos/tuist/tuist/releases/tags/3.39.3'; // latest removed tuistenv
  const response = await axios.get(url, {
    headers: {
      Authorization: `token: ${process.env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
    },
  });
  return response.data.assets.find(
    (asset) => asset.name === 'tuistenv.zip',
  ).browser_download_url;
};
