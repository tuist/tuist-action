module.exports = () => {
  if (process.platform !== 'darwin') {
    throw new Error(
      'This action is only supported in macOS environments.',
    );
  }
};
