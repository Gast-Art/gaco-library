const react = require('@vitejs/plugin-react');
module.exports = {
  stories: ['../src/components/**/*.stories.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: [
    {
      from: '../docs',
      to: '/docs',
    },
  ],
  addons: [{
    name: '@storybook/addon-docs',
    options: {
      configureJSX: true,
      transcludeMarkdown: true,
    },
  }, '@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-storysource', '@storybook/addon-themes'],
  async viteFinal(config, { configType }) {
    config.plugins = config.plugins.filter((plugin) => !(Array.isArray(plugin) && plugin[0]?.name.includes('vite:react')));
    if (config.optimizeDeps) {
      config.optimizeDeps.include = [...(config.optimizeDeps.include || [])];
    }
    config.plugins.push(
      react({
        exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],

        babel: {
          plugins: [],
        },
      }),
    );
    if (configType === 'PRODUCTION') {
      return {
        ...config,
        base: './',
      };
    }
    return config;
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    docsPage: 'automatic',
  },
};
