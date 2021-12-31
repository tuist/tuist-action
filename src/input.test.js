const core = require('@actions/core');
const input = require('./input');

jest.mock('@actions/core');

describe('input', () => {
  describe('command', () => {
    it('returns the right value', () => {
      // Given
      core.getInput.mockReturnValue('generate');

      // Then
      const got = input.command();

      // Then
      expect(got).toEqual('generate');
      expect(core.getInput).toHaveBeenCalledWith('command', {
        required: true,
      });
    });
  });

  describe('args', () => {
    it('returns the right value', () => {
      // Given
      core.getInput.mockReturnValue('--open');

      // Then
      const got = input.args();

      // Then
      expect(got).toEqual('--open');
      expect(core.getInput).toHaveBeenCalledWith('arguments', {
        required: false,
      });
    });
  });

  describe('environment', () => {
    it('returns the right value', () => {
      // Given
      core.getInput.mockReturnValue('TUIST_IS_CI=true');

      // Then
      const got = input.environment();

      // Then
      expect(got).toEqual('TUIST_IS_CI=true');
      expect(core.getInput).toHaveBeenCalledWith('environment', {
        required: false,
      });
    });
  });
});
