const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.@(tsx|mdx)"],
  addons: ['@storybook/addon-docs', '@storybook/addon-controls'],

  // Add nextjs preset
  presets: [path.resolve(__dirname, "./next-preset.js")],
};