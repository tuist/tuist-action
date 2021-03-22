const core = require("@actions/core");
const input = require("./input");
const child_process = require("child_process");
const isTuistInstalled = require("./isTuistInstalled");
const installTuist = require("./installTuist");
const run = require("./run");

jest.mock("./isTuistInstalled");
jest.mock("./installTuist");
jest.mock("child_process");
jest.mock("./input");
jest.mock("@actions/core");

describe("run", () => {
  it("install Tuist if it's not installed", () => {
    // Given
    input.command.mockReturnValue("generate");
    input.args.mockReturnValue("--open");
    isTuistInstalled.mockReturnValue(false);

    // When
    run();

    // Then
    expect(installTuist).toHaveBeenCalled();
  });
  it("doesn't include args if they are not passed", () => {
    // Given
    input.command.mockReturnValue("generate");
    isTuistInstalled.mockReturnValue(true);

    // When
    run();

    // Then
    expect(child_process.execSync).toHaveBeenCalledWith("tuist generate");
  });

  it("runs the command", () => {
    // Given
    input.command.mockReturnValue("generate");
    input.args.mockReturnValue("--open");
    isTuistInstalled.mockReturnValue(true);

    // When
    run();

    // Then
    expect(child_process.execSync).toHaveBeenCalledWith(
      "tuist generate --open"
    );
  });

  it("reports the error if it raises", () => {
    // Given
    input.command.mockReturnValue("generate");
    input.args.mockReturnValue("--open");
    isTuistInstalled.mockReturnValue(true);
    child_process.execSync.mockImplementation(() => {
      throw new Error("execution failed");
    });

    // When
    run();

    // Then
    expect(child_process.execSync).toHaveBeenCalledWith(
      "tuist generate --open"
    );
    expect(core.setFailed).toHaveBeenCalledWith("execution failed");
  });
});
