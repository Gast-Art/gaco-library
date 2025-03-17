import { create } from '@storybook/theming/create';
import { version } from '../package.json';

export default create({
  base: 'light',

  brandTitle: `GACO Component Library v${version}`,
  brandUrl: 'https://github.com/openscript-ch/react-vite-storybook-typescript-starter',
});
