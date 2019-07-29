module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
};
