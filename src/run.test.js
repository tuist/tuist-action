const core = require("@actions/core");
const input = require("./input");
const execSync = require("./execSync");
const isTuistInstalled = require("./isTuistInstalled");
const installTuist = require("./installTuist");
const run = require("./run");
const { tuistEnvPath } = require("./constants");

jest.mock("./isTuistInstalled");
jest.mock("./installTuist");
jest.mock("./execSync");
jest.mock("./input");
jest.mock("@actions/core");

describe("run", () => {
  it("install Tuist if it's not installed", async () => {
    // Given
    input.command.mockReturnValue("generate");
    input.args.mockReturnValue("--open");
    isTuistInstalled.mockReturnValue(false);

    // When
    await run();

    // Then
    expect(installTuist).toHaveBeenCalled();
  });
  it("doesn't include args if they are not passed", async () => {
    // Given
    input.command.mockReturnValue("generate");
    isTuistInstalled.mockReturnValue(true);

    // When
    await run();

    // Then
    expect(execSync).toHaveBeenCalledWith(`${tuistEnvPath} generate`);
  });

  it("runs the command", async () => {
    // Given
    input.command.mockReturnValue("generate");
    input.args.mockReturnValue("--open");
    isTuistInstalled.mockReturnValue(true);

    // When
    await run();

    // Then
    expect(execSync).toHaveBeenCalledWith(`${tuistEnvPath} generate --open`);
  });

  it("reports the error if it raises", async () => {
    // Given
    input.command.mockReturnValue("generate");
    input.args.mockReturnValue("--open");
    isTuistInstalled.mockReturnValue(true);
    execSync.mockImplementation(() => {
      throw new Error("execution failed");
    });

    // When
    await run();

    // Then
    expect(execSync).toHaveBeenCalledWith(`${tuistEnvPath} generate --open`);
    expect(core.setFailed).toHaveBeenCalledWith("execution failed");
  });
});
