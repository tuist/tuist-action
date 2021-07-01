const axios = require("axios");

module.exports = async function () {
  const url = "https://api.github.com/repos/tuist/tuist/releases/latest";
  const response = await axios.get(url);
  return response["assets"].find((asset) => {
    asset["name"] === "tuistenv.zip";
  })["browser_download_url"];
};
