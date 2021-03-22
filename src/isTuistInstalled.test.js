const isTuistInstalled = require("./isTuistInstalled");
const execSync = require("./execSync");

jest.mock("./execSync");

describe("isTuistInstalled", () => {
  it("returns true when which says Tuist exists", () => {
    // When
    const got = isTuistInstalled();

    // Then
    expect(got).toBeTruthy();
    expect(execSync).toHaveBeenCalledWith("which tuist");
  });

  it("returns true when which errors", () => {
    // Given
    execSync.mockImplementation(() => {
      throw new Error("tuist not found");
    });

    // When
    const got = isTuistInstalled();

    // Then
    expect(got).toBeFalsy();
    expect(execSync).toHaveBeenCalledWith("which tuist");
  });
});
