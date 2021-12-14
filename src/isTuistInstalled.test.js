const fs = require('fs');
const isTuistInstalled = require('./isTuistInstalled');

jest.mock('fs');

describe('isTuistInstalled', () => {
  it('returns true when when tuistenv exists in the system', () => {
    // When
    const got = isTuistInstalled();
    fs.existsSync = jest.fn(() => true);

    // Then
    expect(got).toBeTruthy();
  });

  it("returns false when tuistenv doesn't exist in the system", () => {
    // Given
    fs.existsSync = jest.fn(() => {
      throw new Error();
    });

    // When
    const got = isTuistInstalled();

    // Then
    expect(got).toBeFalsy();
  });
});
