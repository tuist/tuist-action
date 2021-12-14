const platform = require('platform');

module.exports = () => {
  if (platform.os.family !== 'Darwin') {
    throw new Error(
      'This action is only supported in macOS environments.',
    );
  }
};
