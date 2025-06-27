import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'espe-components',
  globalStyle: 'src/global/global.css',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'www',
      serviceWorker: null,
    },
  ],
};
