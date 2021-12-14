const installTuist = require('./installTuist');
const execSync = require('./execSync');
const tmp = require('tmp');
const path = require('path');
const downloadFile = require('./downloadFile');

jest.mock('./downloadFile');
jest.mock('./execSync');

describe('installTuist', () => {
  it('installs Tuist', () => {});
});
