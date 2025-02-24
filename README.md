# GACO Component library

## Resources

- Articles
  - [**Use Vite in Library Mode**](https://vitejs.dev/guide/build.html#library-mode)
- Tools
  - [**Vite**](https://vitejs.dev/): Next Generation Frontend Tooling
  - [**Vitest**](https://vitest.dev/): A blazing fast unit-test framework powered by Vite.
  - [**Vite Plugin dts**](https://github.com/qmhc/vite-plugin-dts): A vite plugin for generating `.d.ts` files.
  - [**Storybook**](https://storybook.js.org/): Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.
  - [**Storybook Builder Vite**](https://github.com/storybookjs/builder-vite): An experimental plugin to run and build Storybooks with Vite.

## Help

### Publishing

1. Bump verison in `package.json`
2. Create a git tag `git tag [version]`
3. Push to remote `git push orogin --tags`

#### Manual

1. Bump verison number in `package.json`
2. Publish the component library to npm with npm command:
   `npm run publish:pkg`
