const platform = require('platform');

module.exports = () => {
  if (!platform.os.toLowerCase().includes('darwin')) {
    throw new Error(
      'This action is only supported in macOS environments.',
    );
  }
};
