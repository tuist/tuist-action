const isTuistInstalled = require("./isTuistInstalled");
const child_process = require("child_process");

jest.mock("child_process");

describe("isTuistInstalled", () => {
  it("returns true when which says Tuist exists", () => {
    // When
    const got = isTuistInstalled();

    // Then
    expect(got).toBeTruthy();
    expect(child_process.execSync).toHaveBeenCalledWith("which tuist");
  });

  it("returns true when which errors", () => {
    // Given
    child_process.execSync.mockImplementation(() => {
      throw new Error("tuist not found");
    });

    // When
    const got = isTuistInstalled();

    // Then
    expect(got).toBeFalsy();
    expect(child_process.execSync).toHaveBeenCalledWith("which tuist");
  });
});
