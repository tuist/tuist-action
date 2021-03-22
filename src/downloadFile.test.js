const https = require("https");
const fs = require("fs");
const downloadFile = require("./downloadFile");

jest.mock("fs");
jest.mock("https");

describe("downloadFile", () => {
  it("downloads the file", () => {
    // Given
    const url = "https://tuist.io/file";
    const path = "/tmp/file";
    const file = jest.fn();
    fs.createWriteStream.mockReturnValue(file);

    // When
    downloadFile(url, path);

    // Then
    expect(https.get).toHaveBeenCalled();
  });
});
