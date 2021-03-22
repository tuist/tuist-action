const installTuist = require("./installTuist");
const child_process = require("child_process");
const tmp = require("tmp");
const path = require("path");
const downloadFile = require("./downloadFile");

jest.mock("./downloadFile");
jest.mock("child_process");

describe("installTuist", () => {
  it("installs Tuist", () => {
    // Given
    // TODO

    // When
    installTuist();
  });
});
