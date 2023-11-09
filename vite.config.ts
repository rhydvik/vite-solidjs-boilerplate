import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import eslintPlugin from 'vite-plugin-eslint';
import suidPlugin from '@suid/vite-plugin';

// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /*
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solidPlugin(),
    suidPlugin(),
    eslintPlugin({
      cache: false,
      // include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js'], // adjust as per your project structure
      exclude: ['node_modules', '/virtual:/'],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
  test: {
    exclude: ['node_modules', 'playwright'],
    environment: 'jsdom',
    globals: true,
    testTransformMode: { web: ['/.[jt]sx?$/'] },
  },
});
