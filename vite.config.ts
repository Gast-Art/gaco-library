import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import packageJson from './package.json';

const makeExternalPredicate = (externals: string[]) => {
  if (externals.length === 0) {
    return () => false;
  }
  const pattern = new RegExp(`^(${externals.join('|')})($|/)`);
  return (id: string) => pattern.test(id);
};

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      name: packageJson.name,
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: makeExternalPredicate([...Object.keys(packageJson.dependencies), ...Object.keys(packageJson.peerDependencies)]),
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [
    react({
      exclude: [/\.stories\.(t|j)sx?$/, /node_modules/],
      babel: {
        plugins: [],
      },
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
});
