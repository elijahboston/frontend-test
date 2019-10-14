const path = require('path');

const appPath = path.join(__dirname, '..', 'src');

module.exports = ({ config }) => {
  const rules = config.module.rules;

  // modify storybook's file-loader rule to avoid conflicts with svgr
  const fileLoaderRule = rules.find(rule => rule.test.test('.svg'));
  fileLoaderRule.exclude = [appPath];
  
  rules.push({
    test: /\.svg$/,
    include: [appPath],
    use: [{
      loader: '@svgr/webpack',
      options: {
        // set width/height of svg to 1em,
        // so its size inherits from font size
        icon: true,
      },
    }],
  });
  
  return config;
};