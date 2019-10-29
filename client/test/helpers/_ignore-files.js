import requireHacker from 'require-hacker';
// replace svg imports with an empty <svg> tag
requireHacker.hook('svg', () => 'module.exports = "svg"');