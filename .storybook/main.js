module.exports = {
  stories: ['../stories/**/*.stories.@(ts|tsx|js|jsx)'],
  // https://storybook.js.org/docs/react/configure/typescript#mainjs-configuration
  typescript: {
    check: true, // type-check stories during Storybook build
  },
};
